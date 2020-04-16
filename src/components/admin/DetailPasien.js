
import React, { Component } from 'react'
import Master from './template/Master'
import { connect } from 'react-redux'
import { BASE_URL } from '../constant'

import noImage from '../../assets/img/no_photo.jpg'


import { getDetailPasien } from '../../actions'

// import { Link } from 'react-router-dom'

export class UbahPasien extends Component {

    componentDidMount() {
        this.props.getDetailPasien(this.props.match.params.id)
    }

    render() {


        if (this.props.pasien === null) {
            return <div></div>
        }

        const pasien = this.props.pasien
        var foto = ''
        if (pasien.foto === "storage/images/users/no_photo.png") {
            foto = noImage
        } else {
            foto = `${BASE_URL}/${pasien.foto}`
        }



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
                                        <div className="col-lg-5 d-none d-lg-block pr-0 " style={{ 'background': '#dddddd' }} >
                                            <img alt="bg" src={foto} style={{ 'width': '100%' }} />
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
                                                                <td> {pasien.username}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nama </td>
                                                                <td>{pasien.name}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nomor HP</td>
                                                                <td>{pasien.nomor_hp}</td>
                                                            </tr>

                                                            <tr>
                                                                <td>Alamat</td>
                                                                <td>{pasien.alamat}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Desa</td>
                                                                <td>{pasien.Nm_Desa}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Kecamatan</td>
                                                                <td>{pasien.Nm_Kecamatan}</td>
                                                            </tr>

                                                            <tr>
                                                                <td>Status Pasien</td>
                                                                <td>{pasien.nama_status}</td>
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
    console.log(state)
    return {
        pasien: state.detailPasien
    }
}

export default connect(stateToProps, { getDetailPasien })(UbahPasien)
