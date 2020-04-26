import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ContainerKeterangan extends Component {
    render() {
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
}

const stateToProps = state => {
    return {
        jumlah: state.jumlah
    }
}

export default connect(stateToProps)(ContainerKeterangan)
