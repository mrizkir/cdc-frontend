import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../actions'
import { Redirect } from 'react-router-dom'

export class Logout extends Component {

    componentDidMount() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")

    }

    renderRedirect = () => {
        if (!this.props.user) {
            return <Redirect to='/' />
        }
    }

    render() {

        return (
            <div>
                {this.renderRedirect()}
            </div>
        )
    }
}

const stateToProps = state => {
    console.log(state)
    return {
        user: state.user
    }
}

export default connect(stateToProps, { getUser })(Logout)
