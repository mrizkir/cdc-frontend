import React, { Component } from 'react'
// import Chart from './Chart'
import Sidebar from './Sidebar'
// import Runningtext from './Runningtext'
// import Content from './Contentslide'
// import Map from './Map'
// import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getKoordinatPublic, getUser } from '../actions'
import Navbar from './Navbar'

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
                        {/* <Runningtext /> */}
                        {/* <Chart /> */}

                    </div>
                </div>
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Corona Data Center Kabupaten Bintan</span>
                        </div>
                    </div>
                </footer>


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
