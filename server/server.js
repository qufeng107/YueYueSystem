// 引入api.js
const userApi = require('./api');

// 引入express模块
const express = require('express');
const app = express();

// 引入cors模块，处理跨域问题
const cors = require('cors');
app.use(cors());

// 引入body-parser模块，解析请求过来的参数
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 访问Node服务端映射地址
app.use('/api', userApi);

// 开始服务器端口
app.listen(8088);
console.log("服务器端口开启成功！");