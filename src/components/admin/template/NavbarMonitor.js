import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export class NavbarMonitor extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <ul className="navbar-nav mr-auto">
                        <li>  Data Center  Covid-19 Kabupaten Bintan<br></br> <small>Provinsi Kepulauan Riau</small> </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item  no-arrow">
                            <Link className="nav-link text-dark" to="/" >
                                <i className="fas fa-home fa-sm fa-fw mr-2 text-gray-400"></i>
                                <small>Home</small>
                            </Link>

                        </li>
                        <li className="nav-item  no-arrow">
                            <Link className="nav-link text-dark" to="/admin/dasboard" >
                                <i className="fas fa-tachometer-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                <small>Dasboard</small>
                            </Link>

                        </li>


                        <li className="nav-item dropdown no-arrow">
                            <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.props.namaUser}</span>
                                <img className="img-profile rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png" alt="user" />
                            </Link>

                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">

                                <Link className="dropdown-item" to="/logout" >
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavbarMonitor
