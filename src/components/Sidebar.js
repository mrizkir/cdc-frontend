import React, { Component } from 'react'
import { connect } from 'react-redux'


export class Sidebar extends Component {




    render() {

        if (!this.props.jumlah) {
            return <div>Loading Data..</div>
        }

        const jumlah = this.props.jumlah
        return (
            <>
                <div className="widget-box total">
                    <h2 className="text-primary">Total Kasus Terdaftar</h2>
                    <p className="text-dark">{jumlah.total}</p>
                </div>

                <div className="widget-box">
                    <button className="btn btn-light mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c1" aria-expanded="false" aria-controls="collapseExample">
                        Meninggal ({jumlah.meninggal})
                    </button>
                    <div className="collapse mb-2" id="c1">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">




                            </div>
                        </div>
                    </div>

                    <button className="btn btn-danger mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c2" aria-expanded="false" aria-controls="collapseExample">
                        Positif ({jumlah.positif})
                    </button>
                    <div className="collapse mb-2" id="c2">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">
                                <p className="garis">  Bintan Pesisir <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Timur <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Utara <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Gunung Kijang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Mantang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Seri Kuala Lobam <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Tambelan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Sebong <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Bintan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Toapaya <br className="garis" /><small className="text-danger garis">0 Orang</small></p>

                            </div>
                        </div>
                    </div>

                    <button className="btn btn-danger mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c3" aria-expanded="false" aria-controls="collapseExample">
                        Orang Tanpa Gejala ({jumlah.otg})
                    </button>
                    <div className="collapse mb-2" id="c3">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">
                                <p className="garis">  Bintan Pesisir <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Timur <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Utara <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Gunung Kijang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Mantang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Seri Kuala Lobam <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Tambelan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Sebong <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Bintan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Toapaya <br className="garis" /><small className="text-danger garis">0 Orang</small></p>

                            </div>
                        </div>
                    </div>

                    <button className="btn btn-warning text-dark mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c4" aria-expanded="false" aria-controls="collapseExample">
                        Pasien Dalam Pemantauan ({jumlah.pdp})
                    </button>
                    <div className="collapse mb-2" id="c4">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">
                                <p className="garis">  Bintan Pesisir <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Timur <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Utara <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Gunung Kijang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Mantang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Seri Kuala Lobam <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Tambelan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Sebong <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Bintan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Toapaya <br className="garis" /><small className="text-danger garis">0 Orang</small></p>

                            </div>
                        </div>
                    </div>

                    <button className="btn btn-info mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c5" aria-expanded="false" aria-controls="collapseExample">
                        Orang Dalam Pemantauan ({jumlah.odp})
                    </button>
                    <div className="collapse mb-2" id="c5">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">
                                <p className="garis">  Bintan Pesisir <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Timur <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Utara <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Gunung Kijang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Mantang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Seri Kuala Lobam <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Tambelan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Sebong <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Bintan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Toapaya <br className="garis" /><small className="text-danger garis">0 Orang</small></p>

                            </div>
                        </div>
                    </div>

                    <button className="btn btn-success mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c6" aria-expanded="false" aria-controls="collapseExample">
                        Sembuh ({jumlah.sembuh})
                    </button>
                    <div className="collapse mb-2" id="c6">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">
                                <p className="garis">  Bintan Pesisir <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Timur <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Utara <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Gunung Kijang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Mantang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Seri Kuala Lobam <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Tambelan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Sebong <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Bintan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Toapaya <br className="garis" /><small className="text-danger garis">0 Orang</small></p>

                            </div>
                        </div>
                    </div>

                    <button className="btn btn-primary mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c7" aria-expanded="false" aria-controls="collapseExample">
                        Negatif ({jumlah.negatif})
                    </button>
                    <div className="collapse mb-2" id="c7">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">
                                <p className="garis">  Bintan Pesisir <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Timur <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Bintan Utara <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Gunung Kijang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Mantang <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Seri Kuala Lobam <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Tambelan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Sebong <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Teluk Bintan <br className="garis" /><small className="text-danger garis">0 Orang</small></p>  <hr className="garis" />
                                <p className="garis">  Toapaya <br className="garis" /><small className="text-danger garis">0 Orang</small></p>

                            </div>
                        </div>
                    </div>


                </div>
            </>
        )
    }
}

const stateToProps = state => {
    return {
        jumlah: state.jumlah

    }
}

export default connect(stateToProps)(Sidebar)