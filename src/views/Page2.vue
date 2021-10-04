


<template>
  <div class="show">


    <h3>查询中奖信息</h3>
    <label>请输入b站UID:<br/><input type="text" v-model="name"/></label>
    <el-button type="primary" @click="selectData">查询</el-button>
    <br><br>    <br><br>

    <table border="1px" width="1200px" id="tab">
        <tr>
            <td width="200">Uid</td>
            <td width="200">昵称</td>
            <td width="200">中奖日期</td>
            <td width="600px" >奖项</td>
        </tr>
    </table>

</div>


</template>




<script>


import { json } from 'body-parser';
import Table from '../components/PrizesTable.vue'
  export default {
    name: "Page2",
    data() {
      return {
        name: '',
      }
    },
    components: {

    },

    methods: {
      selectData() {
          
        // 访问node.js服务端（参数名称:要和api.js中[params.属性名]一致，请求方式也应该保持一致）
        this.$http.post('http://1.15.237.190:8088/api/select', {
          name: this.name
        }).then(data => {
            var t = document.getElementById("tab");
            for(var i=0,l=data.body.length;i<l;i++){  

                var tr = document.createElement("tr");
                for(var key in data.body[i]){  
                    if(key == "Uid" || key == "Name" || key == "Date" ||key == "Prize"){ 
                    var td = document.createElement("td");
                    td.innerHTML = data.body[i][key];
                    tr.appendChild(td);
                    }
                }
                t.appendChild(tr);
            }  


        });
      }//,
    //   insertData() {
    //     // 访问node.js服务端（参数名称:要和api.js中[params.属性名]一致，请求方式也应该保持一致）
    //     this.$http.post('http://localhost:8088/api/insert', {
    //       name: this.name,
    //       password: this.password
    //     }).then(data => {
    //       if (data.data.affectedRows > 0) {
    //         this.$message({type: 'success', message: "新增成功"});
    //       } else {
    //         this.$message({type: 'warning', message: "新增失败"});
    //       }
    //     }).catch(error => {
    //       this.$message({type: 'error', message: "网络连接异常"});
    //     });
    //   },
    //   updateData() {
    //     // 访问node.js服务端（参数名称:要和api.js中[params.属性名]一致，请求方式也应该保持一致）
    //     this.$http.post('http://localhost:8088/api/update', {
    //       name: this.name,
    //       password: this.password
    //     }).then(data => {
    //       if (data.data.affectedRows > 0) {
    //         this.$message({type: 'success', message: "修改成功"});
    //       } else {
    //         this.$message({type: 'warning', message: "修改失败"});
    //       }
    //     }).catch(error => {
    //       this.$message({type: 'error', message: "网络连接异常"});
    //     });
    //   },
    //   deleteData() {
    //     // 访问node.js服务端（参数名称:要和api.js中[params.属性名]一致，请求方式也应该保持一致）
    //     this.$http.post('http://localhost:8088/api/delete', {
    //       name: this.name,
    //       password: this.password
    //     }).then(data => {
    //       if (data.data.affectedRows > 0) {
    //         this.$message({type: 'success', message: "删除成功"});
    //       } else {
    //         this.$message({type: 'warning', message: "删除失败"});
    //       }
    //     }).catch(error => {
    //       this.$message({type: 'error', message: "网络连接异常"});
    //     });
    //   }
    }
  }
</script>


<style scoped>

</style>