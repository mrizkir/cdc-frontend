import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MasterHome from './MasterHome'

import Map from './Map'
import { getKoordinatPublic } from '../actions'

export class Home extends Component {

    async componentDidMount() {
        await this.props.getKoordinatPublic()

    }



    renderContent = () => {


        var contentRender = (
            <div>
                <Map koordinat={this.props.koordinat} />
            </div>
        )

        if (this.props.koordinat) {

            if (this.props.koordinat.length === 0) {

                return <MasterHome contentRender={contentRender} />
            }

        } else {
            console.log("tdk ada koor")
            return <MasterHome contentRender={contentRender} />
        }

        return (
            <MasterHome contentRender={contentRender} />
        )
    }
    // }

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

export default connect(stateToProps, { getKoordinatPublic })(Home)
