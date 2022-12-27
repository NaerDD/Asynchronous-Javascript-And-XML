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

//jsonp服务
app.all('/jsonp-server',(request,response)=>{
    // response.send('hello jsonp-server')
    // response.send('console.log("hello jsonp")')
    const data = {
        name:'尚硅谷123'
      };
      //将数据转化为字符串
      let str = JSON.stringify(data);
      //返回结果
      response.end(`handle(${str})`);
})

//用户名检测是否存在
app.all('/check-username',(request,response)=>{
    // response.send('console.log("hello jsonp")')
    const data = {
        exist:1,
        msg:'用户名已经存在'
      };
      //将数据转化为字符串
      let str = JSON.stringify(data);
      //返回结果
      response.end(`handle(${str})`);
})
//JSONP
app.all('/jQuery-jsonp-server',(request,response)=>{
    // response.send('console.log("hello jsonp")')
    const data = {
        name:'尚硅谷',
        city:['北京','上海','深圳']
      };
      //将数据转化为字符串
      let str = JSON.stringify(data);
      //接受 callback 参数
      let cb = request.query.callback;
      //返回结果
      response.end(`${cb}(${str})`);
})
//CORS
app.all('/CORS-server',(request,response)=>{
    //设置响应头
    // response.setHeader("Access-Control-Allow-Origin","*")
    // response.setHeader("Access-Control-Allow-Headers","*")
    // response.setHeader("Access-Control-Allow-Method","*")
    //只有5500开头允许访问
    response.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500")
    response.send("hello CORS")

})

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
