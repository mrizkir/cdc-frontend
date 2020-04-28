import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export class Navbar extends Component {

    renderLinkLogin() {
        if (this.props.statusLogin === "Berhasil") {

            return <Link className="nav-link  btn btn-sm btn-primary" to="/adm/monitor">Admin Dashboard</Link>

        } else {
            return <Link className="nav-link  btn btn-sm btn-primary" to="/login">Login</Link>

        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg  shadow  shadow-lg mb-1 " style={{ background: 'black' }}>
                <Link className="navbar-brand text-warning" to="/"   > Data Center  Covid-19 Kabupaten Bintan
                <p >  <small className="text-light">Provinsi Kepulauan Riau</small></p>
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
