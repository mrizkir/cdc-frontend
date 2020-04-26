import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



export class Dasboard extends Component {

    componentDidMount = async () => {

    }



    render() {

        return (

            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">DASBOARD</h6>

                    </div>
                    <div className="card-body">

                    </div>
                </div>
            </div>
        )
    }


}

const stateToProps = state => {
    return {
        pasiens: state.pasien
    }
}

export default connect(stateToProps)(Dasboard)
