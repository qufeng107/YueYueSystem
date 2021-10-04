


<template>
  <div class="show">


    <h3>中奖信息查询</h3>
    <br/>
    <div class="input_control">
    <input type="text" v-model="name" placeholder="请输入b站UID"/>
    <br>
    <button type="primary" id="btn1" @click="selectData">查询</button>
    </div>
    <br><br>

    <table class="table" width="1200px" id="tab">
        <td width='200'>Uid</td>
        <td width='200'>昵称</td>
        <td width='200'>中奖日期</td>
        <td width='400px'>奖项</td>
    </table>

</div>


</template>


<style scoped>

tr{margin-top:10px;padding:0px;display:block;}

.table{

border-top-width: 1px;
border-top-style: solid;
border-top-color: #f0bce5;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: #f0bce5;

border-spacing: 10px 25px;
}

.show::before{
	content: ' ';
	position: fixed;
	z-index: -1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: #FFF5FA;
	background-size: 100% auto;
}

h3 {
  margin: 40px 0 0;
  font-size:1.5em;
}

.input_control{
  width:360px;
  margin:20px auto;
}
input[type="text"],#btn1{
  box-sizing: border-box;
  text-align:center;
  font-size:1.1em;
  height:2.1em;
  border-radius:4px;
  border:1px solid #c8cccf;
  color:#6a6f77;
  -web-kit-appearance:none;
  -moz-appearance: none;
  display:block;
  outline:0;
  padding:0 1em;
  text-decoration:none;
  width:100%;
}
input[type="text"]:focus{
  border:1px solid #ff7496;
}

::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: #6a6f77;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #6a6f77;
}
input::-webkit-input-placeholder{
  color: #6a6f77;
}
button {
  width:100px;
  color: #fff;
  background-color: #FFE6FA;
  border-color: #FFF5FA;
}
</style>



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

            if(t.rows.length > 0){
                var nodes = t.childNodes[0].childNodes; 
                for(var i=nodes.length-1;nodes.length>0;i--)
                { 
                    t.childNodes[0].removeChild(nodes[i]); 
                }     
            }
            t.innerHTML="<td width='200'>Uid</td>"+
                    "<td width='200'>昵称</td>"+
                    "<td width='200'>中奖日期</td>"+
                    "<td width='400px'>奖项</td>";
            i=0;
            for(var l=data.body.length;i<l;i++){  

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
            t.append("没有更多了～ ଘ(੭ˊ꒳ˋ)੭✧");
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


