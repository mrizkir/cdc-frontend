import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { getPetugas, } from '../../actions/actionPetugas'


export class DetailPetugas extends Component {



    componentDidMount = async () => {
        await this.props.getPetugas()


    }


    contentRender = () => {
        if (!this.props.petugas) return null


        const petugas = this.props.petugas
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Detail Petugas</h6>
                </div>
                <div className="card-body">

                    <div className="container">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row justify-content-center">

                                    <div className="col-lg-7">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Data Petugas </h1>
                                            </div>

                                            <div className="table-responsive">
                                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">

                                                    <tbody>
                                                        <tr>
                                                            <td>Nama</td>
                                                            <td> {petugas.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Username </td>
                                                            <td>{petugas.username}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Nomor HP</td>
                                                            <td>{petugas.nomor_hp}</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Alamat</td>
                                                            <td>{petugas.alamat}</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Kecamatan</td>
                                                            <td>{petugas.Nm_Kecamatan}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Desa</td>
                                                            <td>{petugas.Nm_Desa}</td>
                                                        </tr>



                                                    </tbody>


                                                </table>


                                            </div>
                                            <hr />

                                            <div className="row">

                                                <div className="col-6">
                                                    <Link to='/admin/petugas' className="btn btn-secondary" style={{ width: '100%' }}> Kembali</Link>

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
    }

    render() {



        return (
            <div>
                {this.contentRender()}
            </div>
        )
    }


}


const stateToProps = (state, myprops) => {

    return {
        petugas: state.listPetugas.find(us => {
            return parseInt(us.id) === parseInt(myprops.id)
        })
    }
}

export default connect(stateToProps, { getPetugas })(DetailPetugas)





