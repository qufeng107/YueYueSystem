// 编写相关sql语句
let sqlMap = {
    user: {
      // 查询数据
      select: "select * from Prizes where Uid = ?;",
  
    //   // 插入数据(表名字和列名字要完全改一遍)
    //   insert: "insert into Prizes values(?,?);",
  
    //   // 修改数据
    //   update: "update Prizes set password = ? where name = ?;",
  
    //   // 删除数据
    //   delete: "delete from Prizes where username = ? and password = ?;"
    }
  };
  
  // 暴露sqlMap
  module.exports = sqlMap;