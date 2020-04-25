import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MasterHome from './MasterHome'

import Map from './Map'
import { getKoordinatPublic } from '../actions'
import ModalDisclaimer from './ModalDisclaimer'

export class Home extends Component {

    async componentDidMount() {
        await this.props.getKoordinatPublic()

    }



    renderContent = () => {

        var contentRenderNull = null

        if (this.props.koordinat) {
            if (this.props.koordinat.length === 0) {
                return <MasterHome contentRender={contentRenderNull} />
            }

        } else {
            return <div>Loading</div>
        }

        contentRenderNull = (
            <div>
                <Map koordinat={this.props.koordinat} />
            </div>
        )
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
            <>
                {this.renderContent()}


                <ModalDisclaimer />
            </>
        )
    }
}

const stateToProps = state => {

    return {
        koordinat: state.ListKoordinat
    }
}

export default connect(stateToProps, { getKoordinatPublic })(Home)
