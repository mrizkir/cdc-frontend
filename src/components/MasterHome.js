import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sidebar from './Sidebar'
import { getKoordinatPublic, getUser } from '../actions'
import Navbar from './Navbar'


import '../assets/css/Style.css'

import '../assets/admin/css/sb-admin-2.min.css'
import '../assets/admin/vendor/fontawesome-free/css/all.min.css'


export class MasterHome extends Component {



    componentDidMount = async () => {


        this.props.getUser()


    }


    renderContent = () => {


        return (

            <>
                <Navbar />
                <div className="row">

                    <div className="col-md-2 col-sm-12 bg-dark" style={{ 'paddingRight': '0' }}>
                        <Sidebar />
                    </div>

                    <div className="col-md-10 col-sm-12 " style={{ 'padding': '0' }}>
                        <div className="container-fluid " style={{ 'padding': '0' }}>

                            {this.props.contentRender}


                        </div>

                    </div>
                </div>



            </>

        )

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
        enableReinitialize: true,
    }
}

export default connect(stateToProps, { getKoordinatPublic, getUser })(MasterHome)
