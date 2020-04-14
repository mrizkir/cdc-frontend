import React, { Component } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import './assets/css/Style.css'

import Login from './components/auth/Login'


import Home from './components/Home'
import Dasboard from './components/admin/Dasboard'
import AddUser from './components/admin/AddUser'
import DaftarUser from './components/admin/DaftarUser'




export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App" >

          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/admin/dasboard" component={Dasboard} />
          <Route path="/admin/daftaruser" component={DaftarUser} />
          <Route path="/admin/adduser" component={AddUser} />

        </div>
      </BrowserRouter>
    )
  }
}

export default App
