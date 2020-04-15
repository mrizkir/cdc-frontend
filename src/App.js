import React, { Component } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import './assets/css/Style.css'

import Login from './components/auth/Login'


import Home from './components/Home'
import Dasboard from './components/admin/Dasboard'
import AddUser from './components/admin/AddUser'
import DaftarUser from './components/admin/DaftarUser'
import { Logout } from './components/auth/Logout'
import Pasien from './components/admin/Pasien'
import UbahPasien from './components/admin/UbahPasien'
import DetailPasien from './components/admin/DetailPasien'




export class App extends Component {



  render() {
    return (

      <BrowserRouter>
        <div className="App" >

          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/admin/dasboard" component={Dasboard} />
          <Route path="/admin/daftaruser" component={DaftarUser} />
          <Route path="/admin/adduser" component={AddUser} />
          <Route path="/admin/pasien" component={Pasien} />
          <Route path="/admin/ubahpasien" component={UbahPasien} />
          <Route path="/admin/detailpasien/:id" component={DetailPasien} />

        </div>
      </BrowserRouter>

    )

  }
}

export default App
