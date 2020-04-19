import React, { Component } from 'react'
import Master from './template/Master'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPasien } from '../../actions'

export class Pasien extends Component {


    state = {
        prosesLoad: 0
    }

    componentDidMount = async () => {
        await this.props.getPasien()
        this.setState({
            prosesLoad: 1
        })
    }



    renderPasien() {
        if (!this.props.pasiens) {

            return <tr>
                <td colspan="6">Loading..</td>
            </tr>
        }
        if (this.props.pasiens.length === 0) {
            return <tr>
                <td colSpan="6">Tidak ada data pasien.</td>
            </tr>
        }


        return this.props.pasiens.userspasien.map(pasien => {
            return (
                <tr key={pasien.id}>
                    <td>{pasien.username}</td>
                    <td> <Link to={`/admin/detailpasien/${pasien.id}`} className="link">{pasien.name}</Link></td>
                    <td>{pasien.nomor_hp}</td>
                    <td>{pasien.Nm_Kecamatan}</td>
                    <td>{pasien.nama_status}</td>
                    <td>
                        <Link to={`/admin/ubahpasien/${pasien.id}`} className="btn btn-warning mr-2"><i className="fas fa-edit"></i></Link>
                        <Link to={`/admin/detailpasien/${pasien.id}`} className="btn btn-info"><i className="far fa-eye"></i></Link>
                    </td>
                </tr>
            )
        })
    }

    render() {
        if (this.state.prosesLoad === 0) {
            return (
                <div class="spinner-border text-light text-center" style={{ 'width': '3rem', 'height': '3rem' }} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            )
        }

        const contentRender = (
            <div>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Daftar Pasien</h6>

                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
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



    return {
        pasiens: state.pasien
    }
}

export default connect(stateToProps, { getPasien })(Pasien)
