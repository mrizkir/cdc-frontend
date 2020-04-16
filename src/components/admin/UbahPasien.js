import React, { Component } from 'react'
import Master from './template/Master'

import { BASE_URL } from '../constant'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { getDetailPasien } from '../../actions'
import noImage from '../../assets/img/no_photo.jpg'


export class UbahPasien extends Component {



    componentDidMount() {
        this.props.getDetailPasien(this.props.match.params.id)
    }

    renderInput = ({ input, label, type, meta, dataAwal }) => {
        return (

            <div className="form-group">
                <label htmlFor={label}>{label}</label>
                <input className="form-control form-control-user" id={label}  {...input} type={type} autoComplete='off' placeholder={label} value={dataAwal} />

                {this.renderError(meta)}
            </div>
        )
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <small className="text-danger">{error}</small>
                // <span className="focus-input100" data-placeholder="&#xe82a;">{error}</span>
            )
        }
    }

    onSubmit = (formValues) => {


    }



    render() {
        if (this.props.pasien === null) {
            return <div></div>
        }

        const pasien = this.props.pasien.user
        var foto = ''
        if (pasien.foto === "storage/images/users/no_photo.png") {
            foto = noImage
        } else {
            foto = `${BASE_URL}/${pasien.foto}`
        }
        const contentRender = (
            <div>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Ubah Pasien</h6>
                    </div>
                    <div className="card-body">

                        <div className="container">

                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">

                                    <div className="row">
                                        <div className="col-lg-5 d-none d-lg-block pr-0 " style={{ 'background': '#dddddd' }} >
                                            <img alt="bg" src={foto} style={{ 'width': '100%' }} />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Data Pasien </h1>
                                                </div>
                                                <form className="user">

                                                    <Field name="username" component={this.renderInput} label="NIK" type="text" dataAwal={pasien.username} />

                                                    <hr />

                                                </form>
                                                <hr />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )

        return (
            <Master contentRender={contentRender} />

        )
    }


}


const validate = (formValue) => {
    const errors = {}
    if (!formValue.username) {
        errors.username = "NIK Harus diisi"
    }
    if (!formValue.password) {
        errors.password = "Password Harus diisi"
    }

    return errors;

}

const stateToProps = state => {
    return {
        pasien: state.detailPasien
    }
}


const formWrap = reduxForm({
    form: 'formUbahPasien',
    validate,

})(UbahPasien)

export default connect(stateToProps, { getDetailPasien })(formWrap)
