import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export class Navbar extends Component {

    renderLinkLogin() {
        if (this.props.statusLogin === "Berhasil") {

            return <Link className="nav-link  " to="/adm/monitor">Admin Dashboard</Link>

        } else {
            return <Link className="nav-link  " to="/login">Login</Link>

        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary shadow">
                <Link className="navbar-brand" to="/"> Data Center  Covid-19 Kabupaten Bintan<br></br>
                    <small>Provinsi Kepulauan Riau</small>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto float-right">
                        {/* <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Berita</Link>
                        </li> */}

                        <li className="nav-item">
                            {this.renderLinkLogin()}
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}

const stateToProps = state => {
    return {
        statusLogin: state.statusLogin
    }
}

export default connect(stateToProps)(Navbar)
