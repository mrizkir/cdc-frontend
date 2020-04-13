import React, { Component } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import './css/Style.css'
import Navbar from './components/Navbar'
import Login from './components/auth/Login'


import Api from './axios/Api'
import Home from './components/Home'
import Dasboard from './components/admin/Dasboard'
import AddUser from './components/admin/AddUser'




export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/admin/dasboard" component={Dasboard} />
          <Route path="/adduser" component={AddUser} />

        </div>
      </BrowserRouter>
    )
  }
}

export default App
