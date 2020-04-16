import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Master from './template/Master'

export class Dasboard extends Component {




    render() {


        const contentRender = (
            <div>
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>

            </div>
        )

        return (
            <Master contentRender={contentRender} />
        )
    }
}



export default connect(null)(Dasboard)
