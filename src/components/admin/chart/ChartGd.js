import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

export class ChartGd extends Component {
    constructor(props) {
        super(props);

        var dataChart = this.props.dataChart

        var ttlAPositif = dataChart.gd.ApositifAktif + dataChart.gd.ApositifSembuh + dataChart.gd.ApositifMeninggal;
        var ttlBPositif = dataChart.gd.BpositifAktif + dataChart.gd.BpositifSembuh + dataChart.gd.BpositifMeninggal;
        var ttlOPositif = dataChart.gd.OpositifAktif + dataChart.gd.OpositifSembuh + dataChart.gd.OpositifMeninggal;
        var ttlABPositif = dataChart.gd.ABpositifAktif + dataChart.gd.ABpositifSembuh + dataChart.gd.ABpositifMeninggal;

        var ttlAPdp = dataChart.gd.ApdpAktif + dataChart.gd.ApdpSembuh + dataChart.gd.ApdpMeninggal;
        var ttlBPdp = dataChart.gd.BpdpAktif + dataChart.gd.BpdpSembuh + dataChart.gd.BpdpMeninggal;
        var ttlOPdp = dataChart.gd.OpdpAktif + dataChart.gd.OpdpSembuh + dataChart.gd.OpdpMeninggal;
        var ttlABPdp = dataChart.gd.ABpdpAktif + dataChart.gd.ABpdpSembuh + dataChart.gd.ABpdpMeninggal;

        var ttlAOdp = dataChart.gd.AodpAktif + dataChart.gd.AodpSembuh + dataChart.gd.AodpMeninggal;
        var ttlBOdp = dataChart.gd.BodpAktif + dataChart.gd.BodpSembuh + dataChart.gd.BodpMeninggal;
        var ttlOOdp = dataChart.gd.OodpAktif + dataChart.gd.OodpSembuh + dataChart.gd.OodpMeninggal;
        var ttlABOdp = dataChart.gd.ABodpAktif + dataChart.gd.ABodpSembuh + dataChart.gd.ABodpMeninggal;

        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptionDetail: {
                chart: {
                    type: 'column',
                },
                title: {
                    text: 'Grafik Jumlah Detil (Golongan Darah)'
                },
                xAxis: {
                    categories: [
                        'Golongan Darah A',
                        'Golongan Darah B',
                        'Golongan Darah O',
                        'Golongan Darah AB',
                    ],
                },
                yAxis: {
                    title: {
                        text: 'Jumlah Pasien'
                    },
                    allowDecimals: false

                },

                series: [
                    { data: [ttlAPositif, ttlBPositif, ttlOPositif, ttlABPositif], name: 'Positif', color: 'red' },
                    { data: [ttlAPdp, ttlBPdp, ttlOPdp, ttlABPdp], name: 'PDP', color: 'blue' },
                    { data: [ttlAOdp, ttlBOdp, ttlOOdp, ttlABOdp], name: 'ODP', color: 'yellow' },
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
                    data: [
                        {
                            name: 'Golongan Darah A',
                            y: 5,
                            color: '#1ddf00'
                        },
                        {
                            name: 'Golongan Darah B',
                            y: 2,
                            color: '#a6127f'
                        },
                        {
                            name: 'Golongan Darah O',
                            y: 1,
                            color: '#1e5def'
                        },
                        {
                            name: 'Golongan Darah AB',
                            y: 3,
                            color: '#efef68'
                        },
                    ],
                },
                ],

                xAxis: {
                    categories: [''],
                },
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
            <div >

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
export default ChartGd
