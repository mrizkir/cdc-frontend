import React, { Component } from 'react'
import Map from './components/Map'
import Chart from './components/Chart'
import Sidebar from './components/Sidebar'
import Runningtext from './components/Runningtext'
import Content from './components/Contentslide'
import './css/Style.css'
import Navbar from './components/Navbar'




export class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <Navbar /> */}
        <div className="Header row ">
          <div className="col-md-3 col-sm-12">

          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <h2>Corona Data Center Kabupaten Bintan</h2>
            <p className="sub">Data Kasus Penyebaran Virus Corona di Kabupaten Bintan</p>
          </div>
          <div className="col-md-3 col-sm-12 text-right ">

          </div>
        </div>

        <div className="row">

          <div className="col-md-3 col-sm-12">
            <Sidebar />
          </div>

          <div className="col-md-9 col-sm-12">
            <Map />
            <Runningtext />
            {/* <Chart /> */}

          </div>
        </div>

        <div className="section">
          <Content />
        </div>

        <div className="footer">
          Copyright © 2020 Bintankab.go.id
        </div>
      </div>
    )
  }
}

export default App
