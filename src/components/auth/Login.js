import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'

import { login, getUser } from '../../actions'


import '../../assets/login/css/style.css'





export class Login extends Component {

    componentDidMount() {
        this.props.getUser()
    }

    renderInput = ({ input, label, type, meta }) => {
        return (
            <div className="form-group">

                <input   {...input} type={type} autoComplete='off' placeholder={label} />
                <br />
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
        this.props.login(formValues)

    }

    renderSalah = () => {

        if (this.props.statusLogin === "Salah") {
            return (
                <>
                    <br />
                    <small className="text-danger mt-3">Username atau Passwors Salah.</small>
                </>
            )
        }
    }

    renderContent = () => {


        if (this.props.statusLogin === "Berhasil") {
            return <Redirect to='/admin/dasboard' />
        } else {
            return (
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <div className="body" ></div>
                    <div className="grad"></div>
                    <div className="header">
                        <div>CDC<span>Bintan</span></div>
                    </div>
                    <br />
                    <div className="login">
                        <Field name="username" component={this.renderInput} label="Username" type="text" /><br />
                        <Field name="password" component={this.renderInput} label="Password" type="password" /><br />
                        <button style={{ width: '150px' }}> Login</button>
                        {this.renderSalah()}
                    </div>
                </form>
            )
        }

    }

    render() {


        return (
            <div>



                {this.renderContent()}

            </div>
        )
    }

}

const validate = (formValue) => {
    const errors = {}
    if (!formValue.username) {
        errors.username = "Username Harus diisi"
    }
    if (!formValue.password) {
        errors.password = "Password Harus diisi"
    }

    return errors;

}

const stateToProps = state => {

    return { user: state.user, statusLogin: state.statusLogin }
}

const formWrap = reduxForm({
    form: 'loginForm',
    validate,

})(Login)

export default connect(stateToProps, { login, getUser })(formWrap)