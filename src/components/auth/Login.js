import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, clearSubmitErrors } from 'redux-form'

import { login } from '../../actions'



export class Login extends Component {

    renderInput = ({ input, label, type, meta }) => {
        return (
            <div className="form-group">
                <label htmlFor="" type={type}>{label}</label>
                <input className="form-control" {...input} type={type} autoComplete='off' />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <small className="text-danger">{error}</small>
            )
        }
    }

    onSubmit = (formValues) => {
        this.props.login(formValues)
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className>
                    <Field name="username" component={this.renderInput} label="Username" type="text" />
                    <Field name="password" component={this.renderInput} label="Password" type="password" />
                    <button className="btn btn-primary" style={{ width: '150px' }}> Login</button>
                </form>
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

const formWrap = reduxForm({
    form: 'loginForm',
    validate
})(Login)

export default connect(null, { login })(formWrap)