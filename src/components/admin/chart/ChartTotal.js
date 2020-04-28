import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import { connect } from 'react-redux'

import { getPasien } from '../../../actions/index'
import ChartAll from './ChartAll';
import ChartJk from './ChartJk';
import ChartGd from './ChartGd';
import ChartUsia from './ChartUsia';

class ChartTotal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverData: null,
            tipe: 'all'
        };
    }

    setHoverData = (e) => {
        this.setState({ hoverData: ` (${e.target.series.legendItem.textStr}) ${e.target.category}: ${e.target.y} orang` })
    }


    setFilterChange = (e) => {
        this.setState({
            tipe: e.target.value
        })

    }

    renderChart = () => {
        switch (this.state.tipe) {
            case 'all': return <ChartAll dataChart={this.props.dataChart} setHoverData={this.setHoverData} />
            case 'jk': return <ChartJk dataChart={this.props.dataChart} setHoverData={this.setHoverData} />
            case 'u': return <ChartUsia dataChart={this.props.dataChart} setHoverData={this.setHoverData} />
            case 'gd': return <ChartGd dataChart={this.props.dataChart} setHoverData={this.setHoverData} />
            default: return <ChartAll dataChart={this.props.dataChart} setHoverData={this.setHoverData} />
        }
    }

    renderDownloadButton = () => {
        if (!this.props.statusLogin || this.props.statusLogin !== "Berhasil") return <div></div>
        return <Link className="btn btn-success">Download</Link>
    }



    render() {
        const { hoverData } = this.state;

        return (
            <div className="card mt-5">
                <div className="card-header bg-warning ">
                    <h3 className="text-center" style={{ color: 'black' }}>GRAFIK</h3>
                </div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-sm-4">
                            <select id="lang" onChange={this.setFilterChange} value={this.state.value} className="form-control"  >
                                <option value="all">Jumlah Keseluruhan</option>
                                <option value="jk">Berdasarkan Jenis Kelamin</option>
                                <option value="u">Berdasarkan Usia</option>
                                <option value="gd">Berdasarkan Golongan Darah</option>
                            </select>
                        </div>
                        <div className="col-sm-8 text-right">
                            {this.renderDownloadButton()}
                        </div>
                    </div>

                    <p></p>
                    {this.renderChart()}

                </div>
            </div>
        )
    }
}

const stateToProps = state => {

    return {
        dataChart: state.dataChart,
        statusLogin: state.statusLogin
    }
}

export default connect(stateToProps, { getPasien })(ChartTotal)
