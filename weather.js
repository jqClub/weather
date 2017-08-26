// log套路函数
var log = console.log.bind(console)

// ajax通用函数
// 1.method：请求的方法 2.path:请求的地址 3.data：发送的数据 4.reseponseCallback：回调函数
var ajax = function(method, path, data, reseponseCallback) {
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(method, path, true)
    // 设置发送的数据的格式
    // r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            // console.log('state change', r, r.status, r.response)
            var response = JSON.parse(r.response)
            // console.log('response', response)
            reseponseCallback(response)
        } else {
            // console.log('change')
        }
    }
    // 发送请求
    var data = JSON.stringify(data)
    r.send(data)
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
