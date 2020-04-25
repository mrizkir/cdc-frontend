import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


export class ChartJk extends Component {
    constructor(props) {
        super(props);

        var dataChart = this.props.dataChart
        var ttlLkPositif = dataChart.jk.lkpositifAktif + dataChart.jk.lkpositifSembuh + dataChart.jk.lkpositifMeninggal;
        var ttlPrPositif = dataChart.jk.prpositifAktif + dataChart.jk.prpositifSembuh + dataChart.jk.prpositifMeninggal;
        var ttlLkPdp = dataChart.jk.lkpdpAktif + dataChart.jk.lkpdpSembuh + dataChart.jk.lkpdpMeninggal;
        var ttlPrPdp = dataChart.jk.prpdpAktif + dataChart.jk.prpdpSembuh + dataChart.jk.prpdpMeninggal;
        var ttlLkOdp = dataChart.jk.lkodpAktif + dataChart.jk.lkodpSembuh + dataChart.jk.lkodpMeninggal;
        var ttlPrOdp = dataChart.jk.prodpAktif + dataChart.jk.prodpSembuh + dataChart.jk.prodpMeninggal;

        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptionDetail: {
                chart: {
                    type: 'column',
                },
                title: {
                    text: 'Grafik Jumlah Detil (Jenis Kelamin)'
                },
                xAxis: {
                    categories: ['Laki-laki', 'Perempuan'],
                },
                yAxis: {
                    title: {
                        text: 'Jumlah Pasien'
                    },
                    allowDecimals: false

                },

                series: [
                    { data: [ttlLkPositif, ttlPrPositif], name: 'Positif', color: 'red' },
                    { data: [ttlLkPdp, ttlPrPdp], name: 'PDP', color: 'blue' },
                    { data: [ttlLkOdp, ttlPrOdp], name: 'ODP', color: 'yellow' },
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
                        name: 'Laki-laki',
                        y: 9,
                        // sliced: true,
                        // selected: true,
                        color: 'blue'
                    }, {
                        name: 'Perempuan',
                        y: 5,
                        color: 'yellow'
                    },
                    ]
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
            <div className="card">

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
export default ChartJk
