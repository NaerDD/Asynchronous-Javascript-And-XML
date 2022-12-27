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
    response.send('HELLO AJAX GET--2')
});
// app.post('/server',(request,response)=>{
//     // //设置响应头  设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*')
//     //响应头
//     response.setHeader('Access-Control-Allow-Headers','*')
//     // 设置响应体
//     response.send('HELLO AJAX POST')
// })


//针对IE 缓存
app.get('/ie',(request,response)=>{
    // //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send('HELLO IE ')
});

//延时响应
app.all('/delay',(request,response)=>{
    // //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    
    setTimeout(()=>{
    // 设置响应体
    response.send('延时响应')
    },1000)

});

//jQuery响应
app.all('/jQuery',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    // response.send('jQuery响应')
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data))
});

//axios 服务
app.all('/axios-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data))
});

//fetch 服务
app.all('/fetch-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data))
});

app.all('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    response.send('hello ajax all')
})
 
app.all('/json-server',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    // 响应头
    const data = {
        name:'atguigu',
        // city:['北京','上海','深圳']
    };

    let str = JSON.stringify(data);
    response.send(str)
    // let cb = request.query.callback;
    

    // response.end(`${cb}(${str})`);
    // response.end(`${cb}(${str})`);


        //设置响应体
        // response.send('hello ajax JSON')
});


//4、监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中。。。');
});
