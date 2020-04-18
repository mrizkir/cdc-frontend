import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Master from './template/Master'

import Map from '../Map'
import { getKoordinat } from '../../actions'

export class Dasboard extends Component {

    async componentDidMount() {
        await this.props.getKoordinat()
    }



    renderContent = () => {
        var contentRenderNull = null
        if (this.props.koordinat) {
            if (this.props.koordinat.length === 0) {
                return <Master contentRender={contentRenderNull} />
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
            <Master contentRender={contentRender} />
        )
    }

    render() {


        return (
            <>
                {this.renderContent()}
            </>
        )
    }
}

const stateToProps = state => {

    return {
        koordinat: state.ListKoordinat
    }
}

export default connect(stateToProps, { getKoordinat })(Dasboard)
