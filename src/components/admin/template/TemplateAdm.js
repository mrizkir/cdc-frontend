import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import '../../../assets/admin/css/sb-admin-2.min.css'
import '../../../assets/admin/vendor/fontawesome-free/css/all.min.css'
import '../../../assets/css/StyleAdmin.css'

import { getUser } from '../../../actions'
import { Dasboard } from '../Dasboard'
import { Sidebar } from './Sidebar'
import NavbarAdmin from './NavbarAdmin'
import GugusTugas from '../GugusTugas'
import Petugas from '../Petugas'
import ListPasien from '../ListPasien'

export class TemplateAdm extends Component {



    componentDidMount = () => {
        this.props.getUser()
    }

    pilihanMenu = () => {

        switch (this.props.match.params.menu) {
            case 'dasboard': return <Dasboard />
            case 'gugustugas': return <GugusTugas />
            case 'petugas': return <Petugas />
            case 'pasien': return <ListPasien />
        }
    }



    renderContent = () => {


        if (this.props.statusLogin !== "Berhasil") {
            return <Redirect to='/' />
        } else {
            var nama = ''
            if (this.props.user) {
                nama = this.props.user.name
            }

            return (

                <div id="wrapper">

                    <Sidebar />

                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <NavbarAdmin namaAdmin={nama} />
                            <div className="container-fluid">
                                {this.pilihanMenu()}
                            </div>
                        </div>
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy;  Data Center  Covid-19 Kabupaten Bintan</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

            )
        }
    }

    render() {


        if (!this.props.statusLogin) {
            return <div>Loading..</div>
        }

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

export default connect(stateToProps, { getUser })(TemplateAdm)



