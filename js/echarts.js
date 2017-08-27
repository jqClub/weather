// 制作 echarts 图表库
var echarts1 = function(response) {
    // log(forEcharts(response))
    data1 = forEcharts(response).xAxis
    data2 = forEcharts(response).seriesLow
    data3 = forEcharts(response).seriesHeight


    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('#main'))
    // 指定图表的配置项和数据
    option = {
        title: {
            text: '未来3天气温变化',
            // subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['最高气温', '最低气温']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {
                    readOnly: false
                },
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data1,
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [
            {
                name: '最高气温',
                type: 'line',
                data: data3,
                markPoint: {
                    data: [
                        {
                            type: 'max',
                            name: '最大值'
                        },
                        {
                            type: 'min',
                            name: '最小值'
                        }
                    ]
                },
                markLine: {
                    data: [
                        {
                            type: 'average',
                            name: '平均值'
                        }
                    ]
                }
        },
            {
                name: '最低气温',
                type: 'line',
                data: data2,
                markPoint: {
                    data: [
                        {
                            name: '周最低',
                            value: -2,
                            xAxis: 1,
                            yAxis: -1.5
                        }
                    ]
                },
                markLine: {
                    data: [
                        {
                            type: 'average',
                            name: '平均值'
                        },
                     [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                    }, {
                                symbol: 'circle',
                                label: {
                                    normal: {
                                        position: 'start',
                                        formatter: '最大值'
                                    }
                                },
                                type: 'max',
                                name: '最高点'
                    }]
                    ]
                }
        }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
