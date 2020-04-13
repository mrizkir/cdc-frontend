import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AddUser extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-group">
                            <li className="list-group-item ">
                                <Link to="/adduser">Users</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-9">
                        <div className="container">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser
