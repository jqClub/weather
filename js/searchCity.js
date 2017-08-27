var citySearch = function(city) {
    var request = {
        method: 'get',
        path: `https://api.heweather.com/v5/search?city=${city}&key=fe221a4bfc304563932b2115a74178bd`,
        callback: function(response) {
            // 回调函数中使用 echarts
            // log(response, response.HeWeather5[0].status)
            var status = response.HeWeather5[0].status
            if(status == "ok") {
                getData(city)
            } else {
                // getData('广州')
                log('您输入的城市有误，请检查！')
            }
        }
    }
    ajax(request)
}

var search1 = () => {
    var cityInput = e('.searchCity')
    var button = e('.searchButton')

    button.addEventListener('click', function() {
        // log(cityInput.value)
        var a = cityInput.value
        // 判断城市是否 正确
        citySearch(a)
    })
}

var __main = function() {
    // 默认城市‘广州’
    getData('广州')
    // 查询城市
    search1()
}
__main()
