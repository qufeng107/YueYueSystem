<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/head.jpg" width="300" height="300">

    <h1>欢迎加入兔头帮</h1>
    <p>
      夏川玥玥Official的<a href="https://space.bilibili.com/1802011210" target="_blank" rel="noopener">主页</a>
      <br>
    </p>
    <h3>帮众入口</h3>
    <ul>
      <!-- <router-link to="/Page2">中奖页</router-link> -->
      <router-link target="_blank" :to="{path:'/Page2',query:{id:'1'}}">中奖信息查询（可用/测试中）</router-link>
      <br>
      <router-link target="_blank" :to="{path:'/Page1',query:{id:'1'}}">待更新</router-link>


    <!-- router-view定义页面中显示部分 -->
    <router-view></router-view>
  
    </ul>

    <h3>帮主入口</h3>
    <ul>
      <li><a href='admin.html' target="_blank" rel="noopener">待更新</a></li>
    </ul>
    <br><br><br>
    <ul>
    <end1>Provided by Reol</end1>
    </ul>
    <br>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello::before{
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

end1 {
  margin: 40px 0 0;
}
</style>
