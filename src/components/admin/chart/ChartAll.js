import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

export class ChartAll extends Component {
    constructor(props) {
        super(props);

        var dataChart = this.props.dataChart
        var ttlPositif = dataChart.all.positifAktif + dataChart.all.positifSembuh + dataChart.all.positifMeninggal
        var ttlPdp = dataChart.all.pdpAktif + dataChart.all.pdpSembuh + dataChart.all.pdpMeninggal
        var ttlOdp = dataChart.all.odpAktif + dataChart.all.odpSembuh + dataChart.all.odpMeninggal

        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptionDetail: {
                chart: {
                    type: 'column',
                },
                title: {
                    text: 'Grafik Jumlah Detil'
                },
                xAxis: {
                    categories: ['Aktif', 'Sembuh', 'Meninggal'],
                },
                yAxis: {
                    title: {
                        text: 'Jumlah Pasien'
                    },
                    allowDecimals: false

                },

                series: [
                    { data: [dataChart.all.positifAktif, dataChart.all.positifSembuh, dataChart.all.positifMeninggal], name: 'Positif', color: 'red' },
                    { data: [dataChart.all.pdpAktif, dataChart.all.pdpSembuh, dataChart.all.pdpMeninggal], name: 'PDP', color: 'blue' },
                    { data: [dataChart.all.odpAktif, dataChart.all.odpSembuh, dataChart.all.odpMeninggal], name: 'ODP', color: 'yellow' },


                ],
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                mouseOver: props.setHoverData.bind(this)
                            }
                        }
                    }
                },
                credits: {
                    enabled: false
                },
            },


            // Tabel ke 2
            chartOptionGlobal: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Total Persentase'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [{

                    name: 'Persentase',
                    colorByPoint: true,
                    data: [{
                        name: 'Positif',
                        y: ttlPositif,
                        color: 'red'
                    }, {
                        name: 'PDP',
                        y: ttlPdp,
                        color: 'blue'
                    }, {
                        name: 'ODP',
                        y: ttlOdp,
                        color: 'yellow'
                    },
                    ]
                },
                ],
                credits: {
                    enabled: false
                },
            },


            hoverData: null,

            valueFilter: 'all'

        };
    }
    render() {
        const { chartOptionDetail, chartOptionGlobal, hoverData } = this.state;

        return (
            <div  >

                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={chartOptionGlobal}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card shadow">
                            <div className="card-body">
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={chartOptionDetail}
                                />
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        )
    }
}

export default ChartAll
