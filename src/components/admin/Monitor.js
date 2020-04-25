import React, { Component } from 'react'
// import Chart from './Chart'
import Sidebar from '../Sidebar'
// import Runningtext from './Runningtext'
// import Content from './Contentslide'
// import Map from './Map'
import { Link, Redirect } from 'react-router-dom'

import '../../assets/css/StyleAdmin.css'

import { connect } from 'react-redux'
import { getKoordinat, getUser } from '../../actions'
import Navbar from '../Navbar'
import ChartTotal from './chart/ChartTotal'

export class Monitor extends Component {



    async  componentDidMount() {

        this.props.getUser()
        await this.props.getKoordinat()

    }

    renderKet = () => {

        if (!this.props.jumlah) {
            return (
                <div>
                    <div className="text-center">
                        <div className="spinner-border spinner-border-sm" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow spinner-grow-sm" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <h1 className="text-center"> Corona Data Center Kabupaten Bintan
                                <br />

                    <strong className="text-danger h4 text-center">Total Kasus Terkonfirmasi : {this.props.jumlah.total}</strong></h1>
                <br />
                <div className="row mr-3 ml-3 justify-content-center">

                    <div className="col-xl-3 col-md-3 mb-4">
                        <div className="card border-left-danger shadow h-60 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Positif</div>
                                        <div className="h6 mb-0 font-weight-bold text-gray-800">{this.props.jumlah.positif} Orang</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-3 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Orang Tanpa Gejala</div>
                                        <div className="h6 mb-0 font-weight-bold text-gray-800">{this.props.jumlah.otg} Orang</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-3 mb-4">
                        <div className="card border-left-danger shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Pasien Dalam Pemantauan</div>
                                        <div className="h6 mb-0 font-weight-bold text-gray-800">{this.props.jumlah.pdp} Orang</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-3 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Orang Dalam Pantauan</div>
                                        <div className="h6 mb-0 font-weight-bold text-gray-800">{this.props.jumlah.odp} Orang</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-3 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Sembuh</div>
                                        <div className="h6 mb-0 font-weight-bold text-gray-800">{this.props.jumlah.sembuh} Orang</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-3 mb-4">
                        <div className="card border-left-dark shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Meninggal</div>
                                        <div className="h6 mb-0 font-weight-bold text-gray-800">{this.props.jumlah.meninggal} Orang</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-3 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Negatif</div>
                                        <div className="h6 mb-0 font-weight-bold text-gray-800">{this.props.jumlah.negatif} Orang</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }


    renderContent = () => {
        if (this.props.statusLogin !== "Berhasil") {
            return <Redirect to='/' />
        } else {
            return (
                <div id="wrapper">





                    <div id="content-wrapper" className="d-flex flex-column">


                        <div id="content">


                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">



                                <ul className="navbar-nav mr-auto">
                                    <li>  Corona Data Center Kabupaten Bintan<br></br> <small>Provinsi Kepulauan Riau</small> </li>



                                </ul>

                                <ul className="navbar-nav ml-auto">

                                    <li className="nav-item  no-arrow">
                                        <Link className="nav-link text-dark" to="/" >
                                            <i className="fas fa-home fa-sm fa-fw mr-2 text-gray-400"></i>
                                            <small>Home</small>
                                        </Link>

                                    </li>
                                    <li className="nav-item  no-arrow">
                                        <Link className="nav-link text-dark" to="/admin/pasien" >
                                            <i className="fas fa-users fa-sm fa-fw mr-2 text-gray-400"></i>
                                            <small>Pasien</small>
                                        </Link>

                                    </li>


                                    <li className="nav-item dropdown no-arrow">
                                        <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.namaUser()}</span>
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



                            {this.renderKet()}


                            <div className="container-fluid">

                                {this.props.contentRender}
                                <br />
                                <ChartTotal />


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
        ListKoordinat: state.ListKoordinat,
        user: state.user,
        statusLogin: state.statusLogin,
        jumlah: state.jumlah,
        enableReinitialize: true,
    }
}

export default connect(stateToProps, { getKoordinat, getUser })(Monitor)
