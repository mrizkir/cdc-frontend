import React, { Component } from 'react'
import { connect } from 'react-redux'


export class GugusTugas extends Component {



    render() {
        return (
            <div>
                Gugus TUgas
            </div>
        )
    }
}

const stateToProps = state => {

    return null
}

export default connect(stateToProps)(GugusTugas)
