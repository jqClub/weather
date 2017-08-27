var getData = function(city) {
    var request = {
        method: 'get',
        path: `https://free-api.heweather.com/v5/forecast?city=${city}&key=fe221a4bfc304563932b2115a74178bd`,
        callback: function(response) {
            // 回调函数中使用 echarts
            echarts1(response)
        }
    }
    ajax(request)
}

// 从数据中 返回想要的字段 组成的数组
var xphr = function(data, vi){
    var result = []
    for (var i = 0; i < data.length; i++) {
        var a = data[i]
        result.push(a[vi])

    }
    return result
}
// 从接口获取数据
var forEcharts = function(response) {
    var a = response.HeWeather5[0].daily_forecast
    var temp = xphr(a, 'tmp')
    return {
        xAxis: xphr(a, 'date'),
        seriesLow: xphr(temp, 'min'),
        seriesHeight: xphr(temp, 'max'),
    }
}
