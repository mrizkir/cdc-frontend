import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, clearSubmitErrors } from 'redux-form'
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
                <label   >{label}</label><br />
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

    renderRedirect = () => {

        if (this.props.user) {
            if (this.props.user) {
                return <Redirect to='/admin/dasboard' />
            }
        }
    }

    render() {

        console.log(this.props.user)
        return (
            <div>

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
                    </div>
                </form>

                {this.renderRedirect()}
                {/* <h2>Login</h2>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Field name="username" component={this.renderInput} label="Username" type="text" />
                    <Field name="password" component={this.renderInput} label="Password" type="password" />
                    <button className="btn btn-primary" style={{ width: '150px' }}> Login</button>
                </form> */}
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
    return { user: state.user }
}

const formWrap = reduxForm({
    form: 'loginForm',
    validate,

})(Login)

export default connect(stateToProps, { login, getUser })(formWrap)