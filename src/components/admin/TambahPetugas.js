import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import bgGugus from '../../assets/img/bggugus.jpg'
import { tambahPetugas } from '../../actions/actionPetugas'
import { getKecamatan, getDesa } from '../../actions/actionSystem'

export class TambahPetugas extends Component {

    state = {
        onSubmit: false,
        namaKecamatan: '',
        namaDesa: ''
    }

    styles = {
        bg: {
            background: `url(${bgGugus})`,
            backgroundSize: 'cover'
        }
    }

    componentDidMount() {
        this.props.getKecamatan()
    }

    renderListKecamatan = () => {
        if (!this.props.listKecamatan.kecamatan) return null
        return this.props.listKecamatan.kecamatan.map((kec, index) => {
            return (
                <option key={index} value={kec.PmKecamatanID}>{kec.Nm_Kecamatan}</option>
            )
        })
    }

    onChangeKecamatan = async (e) => {
        var index = e.nativeEvent.target.selectedIndex;
        this.setState({ namaKecamatan: e.nativeEvent.target[index].text })
        await this.props.getDesa(e.target.value)


    }
    onChangeDesa = async (e) => {
        var index = e.nativeEvent.target.selectedIndex;
        await this.setState({ namaDesa: e.nativeEvent.target[index].text })


    }

    renderListDesa = () => {

        if (!this.props.listDesa.desa) return null

        return this.props.listDesa.desa.map((desa, index) => {
            return (
                <option key={index} value={desa.PmDesaID}>{desa.Nm_Desa}</option>
            )
        })

    }




    renderInput = ({ input, label, type, meta, dataToggle, dataTarget }) => {

        if (label == 'Desa') {

            return (
                <div className="form-group">
                    <label htmlFor={label}>{label}</label>
                    <select className="form-control " id={label}  {...input} type={type} onClick={this.onChangeDesa} >
                        <option value="wow">--- Pilih Desa ---</option>
                        {this.renderListDesa()}
                    </select>
                    {this.renderError(meta)}
                </div>
            )
        }

        if (label == 'Kecamatan') {

            return (
                <div className="form-group">
                    <label htmlFor={label}>{label}</label>
                    <select className="form-control " id={label}  {...input} type={type} onClick={this.onChangeKecamatan} >
                        <option value="wow">--- Pilih Kecamatan ---</option>
                        {this.renderListKecamatan()}
                    </select>
                    {this.renderError(meta)}
                </div>
            )
        }

        if (dataToggle) {
            return <div className="form-group">
                <label htmlFor={label}>{label}</label>
                <input className="form-control  " id={label}  {...input} type={type} autoComplete='off' placeholder={label} data-toggle="modal" data-target="#exampleModal" />
                {this.renderError(meta)}
            </div>
        }
        return (
            <div className="form-group">
                <label htmlFor={label}>{label}</label>
                <input className="form-control  " id={label}  {...input} type={type} autoComplete='off' placeholder={label} />
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
        const formD = {
            ...formValues,
            Nm_Kecamatan: this.state.namaKecamatan,
            Nm_Desa: this.state.namaDesa
        }

        await this.props.tambahPetugas(formD)
        this.setState({ onSubmit: true })
    }



    contentRender = () => {
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Tambah Petugas</h6>
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
                                                    <Field name="password" component={this.renderInput} label="Password" type="password" />
                                                    <Field name="nomor_hp" component={this.renderInput} label="Nomor HP" type="text" />
                                                    <Field name="alamat" component={this.renderInput} label="Alamat" type="text" />
                                                    <Field name="PmKecamatanID" component={this.renderInput} label="Kecamatan" />
                                                    <Field name="PmDesaID" component={this.renderInput} label="Desa" />

                                                    <hr />

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <button className="btn btn-primary" style={{ width: '100%' }}> OK</button>
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
    if (!formValue.password) {
        errors.password = "Password Harus diisi"
    }
    if (!formValue.email) {
        errors.email = "Email Harus diisi"
    }
    if (!formValue.PmKecamatanID || formValue.PmKecamatanID === "wow") {
        errors.PmKecamatanID = "Kecamatan harus dipilih"
    }

    return errors;

}


const formWrap = reduxForm({
    form: 'tambahPetugas',
    enableReinitialize: true,
    validate,

})(TambahPetugas)

const stateToProps = state => {
    return {
        listKecamatan: state.listKecamatan,
        listDesa: state.listDesa,
    }
}

export default connect(
    stateToProps, { tambahPetugas, getKecamatan, getDesa })(formWrap)

