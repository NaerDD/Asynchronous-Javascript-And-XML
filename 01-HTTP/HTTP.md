# HTTP
HTTP (hypertext transport protocol) 协议[超文本传输协议],协议详细规定了浏览器和万维网之间互相通信的规则。
约定，规则
## 请求报文
* 重点是格式与参数
1. 行
  * GET/POST + url + HTTP版本号
2. 头
  * Host:atguigu.com
  * Cookie:name=guigu
  * Content-type:application/x-www-form-urlencoded
  * User-Agent:chrome 83

3. 空行 必须有

4. 体 GET为空、POST可以不空 username=admin&password=admin

## 响应报文
1. 行
  *   HTTP版本号 +200(状态码 404 403 401 500 200) +OK
2. 头
  * Content-type:text/html;charset=utf-8
  * Content-length:2048
  * Content-encoding:gzip
3. 空行 必须有

4. 体 主要的返回结果
  `<student>`
    `<name>孙悟空</name>`
    `<age>18</age>`
    `<gender>男</gender>`
  `</student>`