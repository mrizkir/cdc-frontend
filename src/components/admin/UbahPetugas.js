import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link, Redirect } from 'react-router-dom'

import { getPetugas, ubahPetugas } from '../../actions/actionPetugas'
import bgGugus from '../../assets/img/bggugus.jpg'

export class UbahPetugas extends Component {

    state = {
        onSubmit: false
    }

    styles = {
        bg: {
            background: `url(${bgGugus})`,
            backgroundSize: 'cover'
        }
    }


    componentDidMount = async () => {
        await this.props.getPetugas()


    }

    renderInput = ({ input, label, type, meta, dataToggle, dataTarget }) => {
        if (dataToggle) {
            return <div className="form-group">
                <label htmlFor={label}>{label}</label>
                <input className="form-control form-control-user" id={label}  {...input} type={type} autoComplete='off' placeholder={label} data-toggle="modal" data-target="#exampleModal" />
                {this.renderError(meta)}
            </div>
        }
        return (
            <div className="form-group">
                <label htmlFor={label}>{label}</label>
                <input className="form-control form-control-user" id={label}  {...input} type={type} autoComplete='off' placeholder={label} />
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

    onSubmit = async (formValues) => {
        console.log(formValues)
        await this.props.ubahPetugas(this.props.id, formValues)
        this.setState({ onSubmit: true })
    }



    contentRender = () => {

        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ubah Petugas</h6>
                </div>
                <div className="card-body">

                    <div className="container">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-5   d-lg-block pr-0 " style={this.styles.bg} >

                                    </div>
                                    <div className="col-lg-7">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Data Petugas </h1>
                                            </div>

                                            <div  >
                                                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="user" >

                                                    <Field name="name" component={this.renderInput} label="Nama" type="text" />
                                                    <Field name="email" component={this.renderInput} label="Email" type="email" />
                                                    <Field name="username" component={this.renderInput} label="Username" type="text" />
                                                    {/* <Field name="password" component={this.renderInput} label="Password" type="password" /> */}
                                                    <Field name="nomor_hp" component={this.renderInput} label="Nomor HP" type="text" />
                                                    <Field name="alamat" component={this.renderInput} label="Alamat" type="text" />
                                                    <hr />

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => this.onSubmit}> Ubah</button>

                                                        </div>
                                                        <div className="col-6">
                                                            <Link to='/admin/petugas' className="btn btn-secondary" style={{ width: '100%' }}> Batal</Link>

                                                        </div>
                                                    </div>
                                                </form>


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
    }

    render() {

        if (this.state.onSubmit) {
            return <Redirect to='/admin/petugas' />
        }

        return (
            <div>
                {this.contentRender()}
            </div>
        )
    }


}

const validate = (formValue) => {
    const errors = {}
    if (!formValue.username) {
        errors.username = "Username Harus diisi"
    }
    if (!formValue.name) {
        errors.name = "Nama Harus diisi"
    }
    // if (!formValue.password) {
    //     errors.password = "Password Harus diisi"
    // }
    if (!formValue.email) {
        errors.email = "Email Harus diisi"
    }

    return errors;

}


const formWrap = reduxForm({
    form: 'UbahPetugas',
    enableReinitialize: true,
    validate,

})(UbahPetugas)


const stateToProps = (state, myprops) => {

    return {
        initialValues: state.listPetugas.find(us => {
            return parseInt(us.id) === parseInt(myprops.id)
        })
    }
}

export default connect(stateToProps, { getPetugas, ubahPetugas })(formWrap)




