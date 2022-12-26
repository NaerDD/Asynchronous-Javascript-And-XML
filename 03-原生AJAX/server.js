//1、引入express
const express = require('express');

//2、创建应用对象
const app = express();

//3、创建路由规则
//request是对请求报文的封装
//response 是对响应报文的封装
app.get('/server',(request,response)=>{
 
    // //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send('HELLO AJAX')
})
//4、监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中。。。');
})

// app.all('/server',(request,response)=>{
 
//     //设置响应头  设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*')
//     response.setHeader('Access-Control-Allow-Headers','*')
//     //设置响应体
//     response.send('hello ajax post')
    
// })
 

// app.all('/jquery-jsonp-server',(request,response)=>{
 
//     const data = {
//         name:'尚硅谷',
//         city:['北京','上海','深圳']
//     };
//     let str = JSON.stringify(data);
//     let cb = request.query.callback;
    

//     response.end(`${cb}(${str})`);
// });
