
import React, { Component } from 'react'
import Master from './template/Master'
import { connect } from 'react-redux'


import { getDetailPasien } from '../../actions'
import bg from '../../assets/img/bg-doctor.jpg'
// import { Link } from 'react-router-dom'

export class UbahPasien extends Component {

    componentDidMount() {
        this.props.getDetailPasien(this.props.match.params.id)
    }

    render() {
        const contentRender = (
            <div>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Detail Pasien</h6>
                    </div>
                    <div className="card-body">

                        <div className="container">

                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">

                                    <div className="row">
                                        <div className="col-lg-5 d-none d-lg-block " style={{ 'overflow': 'hidden' }} >
                                            <img alt="bg" src={bg} style={{ 'height': '100%' }} />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Data Detail Pasien </h1>
                                                </div>

                                                <div className="table-responsive">
                                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">

                                                        <tbody>
                                                            <tr>
                                                                <td>NIK</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nama </td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nomor HP</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Email</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Alamat</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Desa</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Kecamatan</td>
                                                                <td></td>
                                                            </tr>

                                                            <tr>
                                                                <td>Status Pasien</td>
                                                                <td></td>
                                                            </tr>

                                                        </tbody>


                                                    </table>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )

        return (
            <Master contentRender={contentRender} />

        )
    }


}

const stateToProps = state => {

    return {
        pasien: { state: state.detailPasien }
    }
}

export default connect(stateToProps, { getDetailPasien })(UbahPasien)
