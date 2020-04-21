import React, { Component } from 'react';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class ChartTotal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptions: {
                chart: {
                    type: 'column',
                },
                title: {
                    text: 'Grafik Jumlah Detil'
                },
                xAxis: {
                    categories: ['Positif', 'PDP', 'ODP'],
                },
                yAxis: {
                    title: {
                        text: 'Jumlah Pasien'
                    },
                    allowDecimals: false

                },

                series: [
                    { data: [4, 2, 7], name: 'Aktif', color: 'red' },
                    { data: [1, 1, 4], name: 'Sembuh', color: '#45b539' },
                    { data: [4, 2, 3], name: 'Meninggal', color: 'grey' },


                ],
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                mouseOver: this.setHoverData.bind(this)
                            }
                        }
                    }
                },
                credits: {
                    enabled: false
                },
            },


            // Tabel ke 2
            chartOptions2: {
                chart: {
                    type: 'column',
                },
                title: {
                    text: 'Grafik Jumlah Kasus'
                },
                xAxis: {
                    categories: [''],
                },
                yAxis: {
                    title: {
                        text: 'Jumlah Pasien'
                    },
                    allowDecimals: false

                },

                series: [
                    { data: [9], name: 'Positif', color: '#4e3b88' },
                    { data: [5], name: 'PPD', color: '#906cf9' },
                    { data: [14], name: 'ODP', color: '#b099f9' },


                ],
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                mouseOver: this.setHoverData.bind(this)
                            }
                        }
                    }
                },
                credits: {
                    enabled: false
                },
            },


            hoverData: null,

            valueFilter: 'all'

        };
    }

    setHoverData = (e) => {

        // The chart is not updated because `chartOptions` has not changed.
        this.setState({ hoverData: `${e.target.category} ${e.target.series.legendItem.textStr} : ${e.target.y} orang` })
    }

    updateSeriesAll = () => {
        // The chart is updated only with new options.
        this.setState({
            chartOptions: {
                series: [

                    { data: [4, 2, 7], name: 'Aktif', color: 'red' },
                    { data: [1, 1, 4], name: 'Sembuh', color: 'green' },
                    { data: [4, 2, 3], name: 'Meninggal', color: 'grey' },
                ],
            },
            chartOptions2: {
                series: [
                    { data: [9], name: 'Positif', color: '#4e3b88' },
                    { data: [5], name: 'PPD', color: '#906cf9' },
                    { data: [14], name: 'ODP', color: '#b099f9' },

                ],
                xAxis: {
                    categories: [''],
                },

            }
        });
    }
    updateSeriesJk = () => {
        // The chart is updated only with new options.
        this.setState({
            chartOptions: {
                series: [
                    { data: [5, 4, 6], name: 'Laki-laki', color: '#55aaff' },
                    { data: [5, 3, 8], name: 'Perempuan', color: '#55ffff' },
                ],
                title: {
                    text: 'Grafik Jumlah Detil (Jenis Kelamin)'
                },
            },
            chartOptions2: {
                series: [

                    { data: [15], name: 'Laki-laki', color: '#55aaff' },
                    { data: [16], name: 'Perempuan', color: '#55ffff' },

                ],
                xAxis: {
                    categories: ['Positif', 'PDP', 'ODP'],
                },
                xAxis: {
                    categories: [''],
                },

            }
        });
    }
    updateSeriesU = () => {
        // The chart is updated only with new options.
        this.setState({
            chartOptions: {

                series: [

                    { data: [4, 2, 7], name: 'Aktif', color: 'red' },
                    { data: [1, 1, 4], name: 'Sembuh', color: 'green' },
                    { data: [4, 2, 3], name: 'Meninggal', color: 'grey' },
                ],
            }
        });
    }
    updateSeriesGd = () => {
        // The chart is updated only with new options.
        this.setState({
            chartOptions: {
                series: [
                    { data: [1, 1, 3], name: 'Golongan Darah A', color: '#00aaff' },
                    { data: [3, 1, 4], name: 'Golongan Darah B', color: '#ffaa00' },
                    { data: [2, 2, 2], name: 'Golongan Darah O', color: '#93ef6c' },
                    { data: [1, 1, 2], name: 'Golongan Darah AB', color: '#4a18ef' },

                ],
                title: {
                    text: 'Grafik Jumlah Detil (Golongan Darah)'
                },
            },
            chartOptions2: {
                series: [
                    { data: [5], name: 'Golongan Darah A', color: '#00aaff' },
                    { data: [8], name: 'Golongan Darah B', color: '#ffaa00' },
                    { data: [6], name: 'Golongan Darah O', color: '#93ef6c' },
                    { data: [4], name: 'Golongan Darah AB', color: '#4a18ef' },

                ],
                xAxis: {
                    categories: [''],
                },

            }
        });
    }

    setFilterChange = (e) => {
        this.setState({ valueFilter: e.target.value });
        switch (e.target.value) {
            case 'all': return this.updateSeriesAll()
            case 'jk': return this.updateSeriesJk()
            case 'u': return this.updateSeriesU()
            case 'gd': return this.updateSeriesGd()
        }
    }

    render() {
        const { chartOptions, chartOptions2, hoverData } = this.state;

        return (
            <div className="card">
                <div className="card-header">
                    <h3 className="text-center  ">GRAFIK</h3>
                </div>
                <div className="card-body">


                    <div className="row">
                        <div className="col-sm-4">
                            <select id="lang" onChange={this.setFilterChange} value={this.state.value} className="form-control"  >
                                <option value="all">Jumlah Keseluruhan</option>
                                <option value="jk">Berdasarkan Jenis Kelamin</option>
                                {/* <option value="u">Berdasarkan Usia</option> */}
                                <option value="gd">Berdasarkan Golongan Darah</option>
                            </select>
                        </div>
                        <div className="col-sm-8">  <h3>{hoverData}</h3></div>
                    </div>

                    <p></p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <HighchartsReact
                                        highcharts={Highcharts}
                                        options={chartOptions2}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card shadow">
                                <div className="card-body">
                                    <HighchartsReact
                                        highcharts={Highcharts}
                                        options={chartOptions}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* {this.state.valueFilter} */}

                    {/* <button onClick={this.updateSeries.bind(this)}>Keseluruhan</button> */}
                </div>
            </div>
        )
    }
}

export default ChartTotal
