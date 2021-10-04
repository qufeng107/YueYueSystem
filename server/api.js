// 引入db.js文件（配置数据库相关信息）
let models = require('./db');

// 引入sql.js文件（编写相关sql语句）
let $sql = require('./sql');

// 引入mysql和express模块
let mysql = require('mysql');
let express = require('express');
let router = express.Router();

// 开始连接数据库
let conn = mysql.createConnection(models.mysql);
conn.connect();

// 对JSON字符串进行处理
let jsonWrite = function (response, result) {
  if (typeof result === 'undefined') {
    response.json({
      code: '500',
      msg: '操作失败'
    });
  } else {
    console.log(result);
    response.json(result);
  }
};

// 查询数据（'/select'）
router.post('/select', (request, response) => {

  // 获取编写相关sql语句
  let sql = $sql.user.select;
  console.log("相关sql语句：", sql);

  // 获取请求参数
  let params = request.body;
  console.log("相关参数", params);
  // [params.username]传参类似mybatis
  conn.query(sql, [params.name], function (error, result) {
    if (error) {
      console.log('网络连接异常:' + error);
    }
    if (result) {
      jsonWrite(response, result);
      return response.end();
      
    }
  })
});

// // 插入数据（'/insert'）
// router.post('/insert', (request, response) => {

//   // 获取编写相关sql语句
//   let sql = $sql.user.insert;
//   console.log("相关sql语句：", sql);

//   // 获取请求参数
//   let params = request.body;
//   console.log("相关参数", params);

//   // [params.username]传参类似mybatis
//   conn.query(sql, [params.username, params.password], function (error, result) {
//     if (error) {
//       console.log('网络连接异常:' + error);
//     }
//     if (result) {
//       jsonWrite(response, result);
//     }
//   })
// });

// // 修改数据（'/update'）
// router.post('/update', (request, response) => {

//   // 获取编写相关sql语句
//   let sql = $sql.user.update;
//   console.log("相关sql语句：", sql);

//   // 获取请求参数
//   let params = request.body;
//   console.log("相关参数", params);

//   // [params.username]传参类似mybatis
//   conn.query(sql, [params.password, params.username], function (error, result) {
//     if (error) {
//       console.log('网络连接异常:' + error);
//     }
//     if (result) {
//       jsonWrite(response, result);
//     }
//   })
// });

// // 删除数据（'/delete'）
// router.post('/delete', (request, response) => {

//   // 获取编写相关sql语句
//   let sql = $sql.user.delete;
//   console.log("相关sql语句：", sql);

//   // 获取请求参数
//   let params = request.body;
//   console.log("相关参数", params);

//   // [params.username]传参类似mybatis
//   conn.query(sql, [params.username, params.password], function (error, result) {
//     if (error) {
//       console.log('网络连接异常:' + error);
//     }
//     if (result) {
//       jsonWrite(response, result);
//     }
//    })
// });

// 暴露router
module.exports = router;