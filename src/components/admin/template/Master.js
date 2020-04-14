import React, { Component } from 'react'
import { connect } from 'react-redux'


import { Link, Redirect } from 'react-router-dom'

import { getUser } from '../../../actions'
import '../../../assets/admin/css/sb-admin-2.min.css'
import '../../../assets/admin/vendor/fontawesome-free/css/all.min.css'





export class Master extends Component {


    componentDidMount() {

        this.props.getUser()
    }

    renderContent = () => {
        if (!this.props.user) {
            return <Redirect to='/' />
        } else {
            return (
                <div id="wrapper">


                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-smile"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">Admin cdc bintan</div>
                        </Link>


                        <hr className="sidebar-divider my-0" />


                        <li className="nav-item active">
                            <Link className="nav-link" to="/admin/dasboard">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></Link>
                        </li>


                        <hr className="sidebar-divider" />


                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/daftaruser">
                                <i className="fas fa-fw fa-users"></i>
                                <span>Users</span></Link>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>Utilities</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Utilities:</h6>
                                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                    <a className="collapse-item" href="utilities-other.html">Other</a>
                                </div>
                            </div>
                        </li>


                        <hr className="sidebar-divider" />


                        <div className="sidebar-heading">
                            Addons
      </div>


                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Pages</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <a className="collapse-item" href="login.html">Login</a>
                                    <a className="collapse-item" href="register.html">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                            </div>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Charts</span></a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Tables</span></a>
                        </li>


                        <hr className="sidebar-divider d-none d-md-block" />




                    </ul>



                    <div id="content-wrapper" className="d-flex flex-column">


                        <div id="content">


                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars"></i>
                                </button>


                                {/* <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form> */}


                                <ul className="navbar-nav ml-auto">


                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-search fa-fw"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                <div className="input-group">
                                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button">
                                                            <i className="fas fa-search fa-sm"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>



                                    <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.namaUser()}</span>
                                            <img className="img-profile rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png" />
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/logout" >
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </Link>
                                        </div>
                                    </li>

                                </ul>

                            </nav>



                            <div className="container-fluid">

                                {this.props.contentRender}


                            </div>




                        </div>

                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Corona Data Center Kabupaten Bintan</span>
                                </div>
                            </div>
                        </footer>









                        <a className="scroll-to-top rounded" href="#page-top">
                            <i className="fas fa-angle-up"></i>
                        </a>


                    </div></div>

            )
        }
    }

    namaUser() {

        if (this.props.user) {
            return this.props.user.name
        }
    }

    render() {


        return (
            <body id="page-top">

                {this.renderContent()}




            </body >

        )
    }
}

const stateToProps = state => {

    return {
        user: state.user
    }
}

export default connect(stateToProps, { getUser })(Master)
