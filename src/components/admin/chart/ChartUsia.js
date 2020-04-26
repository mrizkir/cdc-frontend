import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


export class ChartUsia extends Component {
    constructor(props) {
        super(props);

        var dataChart = this.props.dataChart


        var categories = [
            '0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '
        ];

        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptionDetail: {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Total Kasus Berdasarkan Usia'
                },
                // subtitle: {
                //     text: 'Source: <a href="http://populationpyramid.net/germany/2018/">Population Pyramids of the World from 1950 to 2100</a>'
                // },
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{index}. Usia {xDescription}, {value}%.'
                    }
                },
                xAxis: [{
                    categories: categories,
                    reversed: false,
                    labels: {
                        step: 1
                    },
                    accessibility: {
                        description: 'Usia (Laki-laki)'
                    }
                }, { // mirror axis on right side
                    opposite: true,
                    reversed: false,
                    categories: categories,
                    linkedTo: 0,
                    labels: {
                        step: 1
                    },
                    accessibility: {
                        description: 'Usia (Perempuan)'
                    }
                }],
                yAxis: {
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function () {
                            return Math.abs(this.value) + '%';
                        }
                    },
                    accessibility: {
                        description: 'Persentasi',
                        rangeDescription: 'Range: 0 to 5%'
                    }
                },

                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },

                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + ', Usia ' + this.point.category + '</b><br/>' +
                            'Jumlah: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                    }
                },

                series: [{
                    name: 'Laki-laki',
                    color: 'blue',
                    data: [
                        -2, -1, -0, -2,
                        -2, -3, -3, -3,
                        -2.9, -3.5, -4, -4,
                        -1, -2, -1, -2,
                        -0, -1, -2, -3,
                        -0
                    ]
                }, {
                    name: 'Perempuan',
                    color: 'yellow',
                    data: [
                        2, 0, 1, 2, 2,
                        2, 2, 1, 2, 3,
                        4, 4, 5, 2, 2,
                        2, 1, 1, 0, 1,
                        0.0
                    ]
                }],
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
                        name: '0-4',
                        y: 0,
                        // sliced: true,
                        // selected: true,
                        color: 'blue'
                    }, {
                        name: '5-9',
                        y: 0,
                        color: 'red'

                    }, {
                        name: '10-14',
                        y: 2,
                        color: 'pink'

                    }, {
                        name: '15-19',
                        y: 1,
                        color: 'orange'

                    },
                    {
                        name: '20-24',
                        y: 3,
                        color: 'purple'
                    },
                    {
                        name: '25-29',
                        y: 0,
                        color: '#55ff7f'
                    },
                    {
                        name: '30-34',
                        y: 0,
                        color: '#ee2fff'
                    },
                    {
                        name: '35-39',
                        y: 1,
                        color: '#18813b'
                    },
                    {
                        name: '40-44',
                        y: 2,
                        color: '#444eaa'
                    },
                    {
                        name: '45-49',
                        y: 1,
                        color: '#8baa1a'
                    },
                    {
                        name: '50-54',
                        y: 4,
                        color: '#86f5ff'
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
export default ChartUsia
