// log套路函数
var log = console.log.bind(console)
var e = function(selector) {
    return document.querySelector(selector)
}

// ajax通用函数
// 1.method：请求的方法 2.path:请求的地址 3.data：发送的数据 4.reseponseCallback：回调函数
var ajax = function(request) {
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(request.method, request.path, true)
    // 设置发送的数据的格式(跨域的时候注释掉这行)
    // r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var response = JSON.parse(r.response)
            // log('response', response)
            request.callback(response)
        }
    }
    var data = JSON.stringify(request.data)
    if (request.method == 'GET') {
        r.send(data)
    } else {
        r.send(data)
    }
}

// // ajax通用函数
// // 1.method：请求的方法 2.url:请求的地址 3.data：发送的数据 4.reseponseCallback：回调函数
// var ajax = function(request) {
//     var r = new XMLHttpRequest()
//     // 设置请求方法和请求地址
//     r.open(request.method, request.path, true)
//     // 设置发送的数据的格式(跨域的时候注释掉这行)
//     // r.setRequestHeader('Content-Type', 'application/json')
//     // 注册响应函数
//     r.onreadystatechange = function() {
//         if (r.readyState == 4) {
//             var response = JSON.parse(r.response)
//             log('response', response)
//             reseponseCallback(response)
//         } else {
//             // console.log('change')
//         }
//     }
//     // 发送请求
//
//     var data = JSON.stringify(request.data)
//     r.send(data)
// }
