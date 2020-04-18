import React, { Component } from 'react'
import { connect } from 'react-redux'


import { Link, Redirect } from 'react-router-dom'

import { getUser } from '../../../actions'
import '../../../assets/admin/css/sb-admin-2.min.css'
import '../../../assets/admin/vendor/fontawesome-free/css/all.min.css'
import { Sidebar } from '../../Sidebar'





export class Master extends Component {


    componentDidMount() {

        this.props.getUser()

    }

    // sidebarRender = () => {
    //     if (!this.props.sidebarRender) {
    //         return (
    //             <div className="text-center">
    //                 <div className="spinner-border spinner-border-sm" role="status">
    //                     <span className="sr-only">Loading...</span>
    //                 </div>
    //                 <div className="spinner-grow spinner-grow-sm" role="status">
    //                     <span className="sr-only">Loading...</span>
    //                 </div>
    //                 <br></br>
    //                 <br></br>
    //             </div>
    //         )
    //     }



    //     return <Sidebar />
    // }


    renderContent = () => {
        if (this.props.statusLogin !== "Berhasil") {
            return <Redirect to='/' />
        } else {
            return (
                <div id="wrapper">


                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin/dasboard">
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

                        {/* {this.sidebarRender()} */}
                        {/* <Sidebar /> */}
                        <hr className="sidebar-divider" />


                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/admin/daftaruser">
                                <i className="fas fa-fw fa-users"></i>
                                <span>Users</span></Link>
                        </li> */}


                        {/* <li className="nav-item">
                            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>Utilities</span>
                            </Link>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Utilities:</h6>
                                    <Link className="collapse-item" to="utilities-color.html">Colors</Link>
                                    <Link className="collapse-item" to="utilities-border.html">Borders</Link>
                                    <Link className="collapse-item" to="utilities-animation.html">Animations</Link>
                                    <Link className="collapse-item" to="utilities-other.html">Other</Link>
                                </div>
                            </div>
                        </li> */}


                        {/* <hr className="sidebar-divider" /> */}
                        {/* 

                        <div className="sidebar-heading">
                            Addons
      </div> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/pasien">
                                <i className="fas fa-fw fa-users"></i>
                                <span>Passien</span></Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Pages</span>
                            </Link>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <Link className="collapse-item" to="login.html">Login</Link>
                                    <Link className="collapse-item" to="register.html">Register</Link>
                                    <Link className="collapse-item" to="forgot-password.html">Forgot Password</Link>
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <Link className="collapse-item" to="404.html">404 Page</Link>
                                    <Link className="collapse-item" to="blank.html">Blank Page</Link>
                                </div>
                            </div>
                        </li>
 */}

                        {/* <li className="nav-item">
                            <Link className="nav-link" to="charts.html">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Charts</span></Link>
                        </li> */}

                        {/* 
                        <li className="nav-item">
                            <Link className="nav-link" to="tables.html">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Tables</span></Link>
                        </li>


                        <hr className="sidebar-divider d-none d-md-block" />
 */}



                    </ul>



                    <div id="content-wrapper" className="d-flex flex-column">


                        <div id="content">


                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                                {/* <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars"></i>
                                </button> */}


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

                                <ul className="navbar-nav mr-auto">
                                    <Link className="dropdown-item" to="/" >
                                        <i className="fas fa-home fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Home
                                    </Link>
                                </ul>

                                <ul className="navbar-nav ml-auto">

                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                        <Link className="nav-link dropdown-toggle" to="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-search fa-fw"></i>
                                        </Link>

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
                                        <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.namaUser()}</span>
                                            <img className="img-profile rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png" alt="user" />
                                        </Link>

                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                            {/* <Link className="dropdown-item" to="#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </Link>
                                            <Link className="dropdown-item" to="#">
                                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </Link>
                                            <Link className="dropdown-item" to="#">
                                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </Link>
                                            <div className="dropdown-divider"></div> */}
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


                        <Link className="scroll-to-top rounded" to="#page-top">
                            <i className="fas fa-angle-up"></i>
                        </Link>


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
            <div id="page-top">

                {this.renderContent()}

            </div >

        )
    }
}

const stateToProps = state => {

    return {
        user: state.user,
        statusLogin: state.statusLogin
    }
}

export default connect(stateToProps, { getUser })(Master)
