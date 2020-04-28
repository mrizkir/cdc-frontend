import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MasterHome from './MasterHome'

import Map from './Map'
import { getKoordinatPublic } from '../actions'
import ModalDisclaimer from './ModalDisclaimer'
import ChartTotal from './admin/chart/ChartTotal'
import FooterHome from './FooterHome'


export class Home extends Component {


    state = {
        koordinat: [
            { lat: 1.071355, lng: 104.216962, status_pasien: 100, status: "" },
            { lat: 1.052278, lng: 104.675537, status_pasien: 100, status: "" }
        ]
    }

    async componentDidMount() {
        await this.props.getKoordinatPublic()

    }



    renderContent = () => {

        var contentRenderNull = (
            <div>
                <Map koordinat={this.state.koordinat} />
            </div>
        )

        if (this.props.koordinat) {
            if (this.props.koordinat.length === 0) {

                return <MasterHome contentRender={contentRenderNull} />
            }
        } else {
            return <div>Loading</div>
        }



        var contentRender = (

            <div>
                <Map koordinat={this.props.koordinat} />

            </div>
        )
        return (
            <MasterHome contentRender={contentRender} />
        )
    }


    render() {


        return (
            <div style={{ background: 'black' }} >
                {this.renderContent()}
                <div className="container">
                    <ChartTotal />
                </div>

                <ModalDisclaimer />
                <FooterHome />
            </div>
        )
    }
}

const stateToProps = state => {

    return {
        koordinat: state.ListKoordinat
    }
}

export default connect(stateToProps, { getKoordinatPublic })(Home)
