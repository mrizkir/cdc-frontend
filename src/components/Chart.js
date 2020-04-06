import ZingChart from 'zingchart-react';

import React, { Component } from 'react'

export class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: {
                height: '350',
                type: 'line',
                legend: {
                    margin: 'auto auto 15 auto',
                    backgroundColor: 'none',
                    borderWidth: '0px',
                    item: {
                        margin: '0px',
                        padding: '0px',
                        fontColor: '#707d94',
                        fontFamily: 'Arial',
                        fontSize: '9px'
                    },
                    layout: 'x4',
                    marker: {
                        type: 'match',
                        padding: '3px',
                        fontFamily: 'Arial',
                        fontSize: '10px',
                        lineWidth: '2px',
                        showLine: 'true',
                        size: 4
                    },
                    shadow: true
                },
                series: [
                    {
                        text: 'Positif',
                        values: [69, 68, 54, 48, 70, 74, 98, 70, 72, 68, 49, 69],
                        lineColor: '#dc1114',
                        lineWidth: '2px',
                        marker: {
                            backgroundColor: '#fff',
                            borderColor: '#dc1114',
                            borderWidth: '1px',
                            shadow: false,
                            size: 3
                        },
                        palette: 0,
                        shadow: true
                    },
                    {
                        text: 'PDP',
                        values: [51, 53, 47, 60, 48, 52, 75, 52, 55, 47, 60, 48],
                        lineColor: '#0055ff',
                        lineWidth: '2px',
                        marker: {
                            backgroundColor: '#fff',
                            borderColor: '#0055ff',
                            borderWidth: '1px',
                            shadow: false,
                            size: 3
                        },
                        palette: 1,
                        shadow: true,
                        visible: true
                    },
                    {
                        text: 'ODP',
                        values: [42, 43, 30, 50, 31, 48, 55, 46, 48, 32, 50, 38],
                        lineColor: '#00c800',
                        lineWidth: '2px',
                        marker: {
                            backgroundColor: '#fff',
                            borderColor: '#00c800',
                            borderWidth: '1px',
                            shadow: false,
                            size: 3
                        },
                        palette: 2,
                        shadow: true,
                        visible: true
                    },
                    {
                        text: 'Sembuh',
                        values: [25, 15, 26, 21, 24, 26, 33, 25, 15, 25, 22, 24],
                        lineColor: '#686868',
                        lineWidth: '2px',
                        marker: {
                            backgroundColor: '#fff',
                            borderColor: '#686868',
                            borderWidth: '1px',
                            shadow: false,
                            size: 3
                        },
                        palette: 3,
                        shadow: true
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div>
                <ZingChart data={this.state.config} />
            </div>
        )
    }
}

export default Chart
