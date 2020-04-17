import React, { Component } from 'react'
import Master from './template/Master'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPasien } from '../../actions'

export class Pasien extends Component {


    componentDidMount = () => {
        this.props.getPasien()
    }


    renderPasien() {
        if (!this.props.pasiens) {

            return <div>Loading..</div>
        }
        if (this.props.pasiens.length === 0) {
            return <div>Tidak ada data pasien.</div>
        }


        return this.props.pasiens.userspasien.map(pasien => {
            return (
                <tr>
                    <td>{pasien.username}</td>
                    <td>{pasien.name}</td>
                    <td>{pasien.nomor_hp}</td>
                    <td>{pasien.Nm_Kecamatan}</td>
                    <td>{pasien.nama_status}</td>
                    <td>
                        <Link to={`/admin/ubahpasien/${pasien.id}`} class="btn btn-warning mr-2"><i class="fas fa-edit"></i></Link>
                        <Link to={`/admin/detailpasien/${pasien.id}`} class="btn btn-info"><i class="far fa-eye"></i></Link>
                    </td>
                </tr>
            )
        })
    }

    render() {


        const contentRender = (
            <div>

                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Daftar Pasien</h6>

                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>NIK</th>
                                        <th>Nama</th>
                                        <th>No Hp</th>
                                        <th>Kecamatan</th>
                                        <th>Status Pasien</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderPasien()}
                                </tbody>


                            </table>


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
        pasiens: state.pasien
    }
}

export default connect(stateToProps, { getPasien })(Pasien)
