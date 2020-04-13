import React, { Component } from 'react'
// import Chart from './Chart'
import Sidebar from './Sidebar'
import Runningtext from './Runningtext'
import Content from './Contentslide'
import Map from './Map'

import { connect } from 'react-redux'
import { getKoordinat } from '../actions'

export class Home extends Component {



    componentDidMount = async () => {

        this.props.getKoordinat()


    }



    render() {



        return (
            <>
                <div className="Header row ">
                    <div className="col-md-3 col-sm-12">

                    </div>
                    <div className="col-md-6 col-sm-12 text-center">
                        <h2>Corona Data Center Kabupaten Bintan</h2>
                        <p className="sub">Data Kasus Penyebaran Virus Corona di Kabupaten Bintan</p>
                    </div>

                    <div className="col-md-3 col-sm-12 text-right ">

                    </div>
                </div>

                <div className="row">

                    <div className="col-md-3 col-sm-12">
                        <Sidebar />
                    </div>

                    <div className="col-md-9 col-sm-12">
                        <Map koordinat={this.props.ListKoordinat.data} />
                        <Runningtext />
                        {/* <Chart /> */}

                    </div>
                </div>

                <div className="section">
                    <Content />
                </div>

                <div className="footer">
                    Copyright © 2020 Bintankab.go.id
        </div>
            </>
        )
    }
}

const stateToProps = state => {

    return { ListKoordinat: state.ListKoordinat }
}

export default connect(stateToProps, { getKoordinat })(Home)
