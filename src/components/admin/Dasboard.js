import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Monitor from './Monitor'

import Map from './MapAdmin'
import { getKoordinat } from '../../actions'



export class Dasboard extends Component {

    async componentDidMount() {
        await this.props.getKoordinat()

    }



    renderContent = () => {
        var contentRenderNull = null
        if (this.props.koordinat) {
            if (this.props.koordinat.length === 0) {
                return <Monitor contentRender={contentRenderNull} />
            }

        } else {
            return <div><div class="spinner-border spinner-border-sm" role="status">
                <span class="sr-only">Loading...</span>
            </div>
                <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="sr-only">Loading...</span>
                </div></div>
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
            <>
                <Monitor contentRender={contentRender} />

            </>
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
        koordinat: state.ListKoordinatAdmin,
        enableReinitialize: true,
    }
}

export default connect(stateToProps, { getKoordinat })(Dasboard)
