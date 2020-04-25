export const dataChartDetail = {
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
        { data: [4, 2, 7], name: 'Positif', color: 'red' },
        { data: [1, 1, 4], name: 'PDP', color: 'blue' },
        { data: [4, 2, 3], name: 'ODP', color: 'yellow' },


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
