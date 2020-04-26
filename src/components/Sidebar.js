import React, { Component } from 'react'
import { connect } from 'react-redux'


export class Sidebar extends Component {


    kecamatanMeninggal = () => {
        if (!this.props.jumlah) {
            return <div>Loading Data..</div>
        }
        const kecamatan = this.props.jumlah.kecamatan.meninggal
        var count = {};
        kecamatan.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
        let data = []
        for (let [key, value] of Object.entries(count)) {
            data.push(<div key={key}><p className="garis">  {key} <br className="garis" /><small className="text-danger garis">{value} Orang</small></p>  <hr className="garis" /> </div>);
        }
        return data
    }
    kecamatanPositif = () => {
        if (!this.props.jumlah) {
            return <div>Loading Data..</div>
        }
        const kecamatan = this.props.jumlah.kecamatan.positif
        var count = {};
        kecamatan.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
        let data = []
        for (let [key, value] of Object.entries(count)) {
            data.push(<div key={key}><p className="garis">  {key} <br className="garis" /><small className="text-danger garis">{value} Orang</small></p>  <hr className="garis" /> </div>);
        }
        return data
    }
    kecamatanOtg = () => {
        if (!this.props.jumlah) {
            return <div>Loading Data..</div>
        }
        const kecamatan = this.props.jumlah.kecamatan.otg
        var count = {};
        kecamatan.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
        let data = []
        for (let [key, value] of Object.entries(count)) {
            data.push(<div key={key}><p className="garis">  {key} <br className="garis" /><small className="text-danger garis">{value} Orang</small></p>  <hr className="garis" /> </div>);
        }
        return data
    }

    kecamatanPdp = () => {
        if (!this.props.jumlah) {
            return <div>Loading Data..</div>
        }
        const kecamatan = this.props.jumlah.kecamatan.pdp
        var count = {};
        kecamatan.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
        let data = []
        for (let [key, value] of Object.entries(count)) {
            data.push(<div key={key}><p className="garis">  {key} <br className="garis" /><small className="text-danger garis">{value} Orang</small></p>  <hr className="garis" /> </div>);
        }
        return data
    }
    kecamatanOdp = () => {
        if (!this.props.jumlah) {
            return <div>Loading Data..</div>
        }
        const kecamatan = this.props.jumlah.kecamatan.odp
        var count = {};
        kecamatan.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
        let data = []
        for (let [key, value] of Object.entries(count)) {
            data.push(<div key={key}><p className="garis">  {key} <br className="garis" /><small className="text-danger garis">{value} Orang</small></p>  <hr className="garis" /> </div>);
        }
        return data
    }
    kecamatanSembuh = () => {
        if (!this.props.jumlah) {
            return <div>Loading Data..</div>
        }
        const kecamatan = this.props.jumlah.kecamatan.sembuh
        var count = {};
        kecamatan.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
        let data = []
        for (let [key, value] of Object.entries(count)) {
            data.push(<div key={key}><p className="garis">  {key} <br className="garis" /><small className="text-danger garis">{value} Orang</small></p>  <hr className="garis" /> </div>);
        }
        return data
    }
    kecamatanNegatif = () => {
        if (!this.props.jumlah) {
            return <div>Loading Data..</div>
        }
        const kecamatan = this.props.jumlah.kecamatan.negatif
        var count = {};
        kecamatan.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
        let data = []
        for (let [key, value] of Object.entries(count)) {
            data.push(<div key={key}><p className="garis">  {key} <br className="garis" /><small className="text-danger garis">{value} Orang</small></p>  <hr className="garis" /> </div>);
        }
        return data
    }

    render() {


        if (!this.props.jumlah) {
            return <div className="text-center">
                <div className="spinner-border spinner-border-sm" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <br></br>
                <br></br>
            </div>
        }

        const jumlah = this.props.jumlah
        return (
            <>
                <div className="widget-box total">
                    <h2 className="text-primary">Total Kasus Terdaftar</h2>
                    <p className="text-dark">{jumlah.total}</p>
                </div>

                <div className="widget-box">
                    <button className="btn btn-dark mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c1" aria-expanded="false" aria-controls="collapseExample">
                        Meninggal ({jumlah.meninggal})
                    </button>
                    <div className="collapse mb-2" id="c1">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">

                                {this.kecamatanMeninggal()}


                            </div>
                        </div>
                    </div>

                    <button className="btn btn-dark mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c2" aria-expanded="false" aria-controls="collapseExample">
                        Positif ({jumlah.positif})
                    </button>
                    <div className="collapse mb-2" id="c2">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">
                                {this.kecamatanPositif()}
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-dark mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c3" aria-expanded="false" aria-controls="collapseExample">
                        Orang Tanpa Gejala ({jumlah.otg})
                    </button>
                    <div className="collapse mb-2" id="c3">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">
                                {this.kecamatanOtg()}
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-dark  mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c4" aria-expanded="false" aria-controls="collapseExample">
                        Pasien Dalam Pemantauan ({jumlah.pdp})
                    </button>
                    <div className="collapse mb-2" id="c4">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            {this.kecamatanPdp()}
                        </div>
                    </div>

                    <button className="btn btn-dark mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c5" aria-expanded="false" aria-controls="collapseExample">
                        Orang Dalam Pemantauan ({jumlah.odp})
                    </button>
                    <div className="collapse mb-2" id="c5">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">
                                {this.kecamatanOdp()}
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-dark mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c6" aria-expanded="false" aria-controls="collapseExample">
                        Sembuh ({jumlah.sembuh})
                    </button>
                    <div className="collapse mb-2" id="c6">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">
                                {this.kecamatanSembuh()}
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-dark mb-1" style={{ 'width': '100%' }} type="button" data-toggle="collapse" data-target="#c7" aria-expanded="false" aria-controls="collapseExample">
                        Negatif ({jumlah.negatif})
                    </button>
                    <div className="collapse mb-2" id="c7">
                        <div className="card card-body">
                            <small>KECAMATAN</small>
                            <hr className="garis" />
                            <div className="list-grup">
                                {this.kecamatanNegatif()}
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