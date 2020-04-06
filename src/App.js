import React, { Component } from 'react'
import Map from './components/Map'
import Chart from './components/Chart'

import './css/Style.css'
import logo from './img/logobintan.png'
import garuda from './img/garuda.png'


export class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="Header row ">
          <div className="col-md-3 col-sm-12">
            <img src={logo} width="60px" />
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <h2>Corona Data Center Bintan</h2>
            <p className="sub">Data Kasus Penyebaran Virus Corona di Kabupaten Bintan</p>
          </div>
          <div className="col-md-3 col-sm-12 text-right ">
            <img src={garuda} width="130px" />
          </div>
        </div>
        <div className="row">

          <div className="col-md-3 col-sm-12">

            <div className="widget total">
              <h2>Total Kasus Terdaftar</h2>
              <p>0</p>
            </div>

            <div className="widget">
              <h4 className="text-center bg-danger">Terinfeksi</h4>
              <div className="widget-body">
                <div className="list-group">
                  <div className="list-group-item">
                    <p>  Bintan Pesisir</p> <span className="text-danger">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Bintan Timur</p> <span className="text-danger">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p>  Bintan Utara</p> <span className="text-danger">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Gunung Kijang </p><span className="text-danger">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p>  Mantang </p><span className="text-danger">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p>  Seri Kuala Lobam</p> <span className="text-danger">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p>Tambelam </p><span className="text-danger">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Teluk Sebong</p> <span className="text-danger">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Teluk Bintan</p> <span className="text-danger">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Toapaya</p> <span className="text-danger">0 Orang</span>
                  </div>

                </div>
              </div>
            </div>
            <div className="widget">
              <h4 className="text-center bg-primary">Pasien Dalam Pemantauan</h4>
              <div className="widget-body">
                <div className="list-group">
                  <div className="list-group-item">
                    <p> Bintan Pesisir</p> <span className="text-primary">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Bintan Timur</p> <span className="text-primary">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Bintan Utara</p> <span className="text-primary">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p>  Gunung Kijang </p><span className="text-primary">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p>  Mantang</p> <span className="text-primary">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Seri Kuala Lobam</p> <span className="text-primary">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Tambelam</p> <span className="text-primary">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Teluk Sebong</p> <span className="text-primary">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Teluk Bintan</p> <span className="text-primary">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Toapaya</p> <span className="text-primary">0 Orang</span>
                  </div>

                </div>
              </div>
            </div>
            <div className="widget">
              <h4 className="text-center bg-success">Orang Dalam Pemantauan</h4>
              <div className="widget-body">
                <div className="list-group">
                  <div className="list-group-item">
                    <p>Bintan Pesisir </p> <span className="text-success">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Bintan Timur </p><span className="text-success">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p>  Bintan Utara</p> <span className="text-success">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Gunung Kijang</p> <span className="text-success">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Mantang</p> <span className="text-success">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Seri Kuala Lobam </p><span className="text-success">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Tambelam </p><span className="text-success">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p>  Teluk Sebong</p> <span className="text-success">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p>Teluk Bintan</p> <span className="text-success">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Toapaya</p> <span className="text-success">0 Orang</span>
                  </div>

                </div>
              </div>
            </div>
            <div className="widget">
              <h4 className="text-center">Pasien Sembuh</h4>
              <div className="widget-body">
                <div className="list-group">
                  <div className="list-group-item">
                    <p> Bintan Pesisir</p> <span className="text-dark">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Bintan Timur</p> <span className="text-dark">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Bintan Utara</p> <span className="text-dark">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p>  Gunung Kijang </p><span className="text-dark">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p>  Mantang</p> <span className="text-dark">0 Orang</span>
                  </div>
                  <div className="list-group-item">
                    <p> Seri Kuala Lobam</p> <span className="text-dark">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Tambelam</p> <span className="text-dark">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Teluk Sebong</p> <span className="text-dark">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Teluk Bintan</p> <span className="text-dark">0 Orang</span>
                  </div>

                  <div className="list-group-item">
                    <p> Toapaya</p> <span className="text-dark">0 Orang</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9 col-sm-12">

            <Map />

            <div className="runtext-container">
              <div className="main-runtext">
                <marquee onmouseover="this.stop();" onmouseout="this.start();">

                  <div className="holder">

                    <div className="text-container">
                      &nbsp; &nbsp;  &nbsp; Mencuci tangan dengan benar adalah cara paling sederhana namun efektif untuk mencegah penyebaran Covid-19. |
                    </div>


                    <div className="text-container">
                      &nbsp; &nbsp;  &nbsp; Untuk menjaga dan meningkatkan daya tahan tubuh, Anda disarankan untuk mengonsumsi makanan sehat, seperti sayuran dan buah-buahan, dan makanan berprotein, seperti telur, ikan, dan daging tanpa lemak. |
                    </div>

                    <div className="text-container">
                      &nbsp; &nbsp;  &nbsp; Lakukan physical distancing dengan cara menjaga jarak minimal 1 meter saat berinteraksi dengan orang lain dan hindari bepergian ke tempat yang ramai.
                    </div>



                  </div>

                </marquee>
              </div>
            </div>

            <Chart />

          </div>
        </div>
        <div className="footer">
          Copyright © 2020 Bintankab.go.id
        </div>
      </div>
    )
  }
}

export default App
