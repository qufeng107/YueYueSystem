<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      夏川玥玥Official的主页<br>
      <a href="https://space.bilibili.com/1802011210" target="_blank" rel="noopener">传送门</a>
      <br><br><br>
    </p>
    <h3>帮众这边请</h3>
    <ul>
      <li><a href='member.html' target="_blank" rel="noopener">精彩视频</a></li><br>
      <li><a href='member.html' target="_blank" rel="noopener">壁纸资源</a></li><br>
      <li><a href='member.html' target="_blank" rel="noopener">待更新</a></li><br>
    </ul>
    <h3>堂主和护法这边请</h3>
    <ul>
      <li><a href='member-vip.html' target="_blank" rel="noopener">传送门</a></li>
    </ul>
    <h3>帮主这边请</h3>
    <ul>
      <li><a href='admin.html' target="_blank" rel="noopener">传送门</a></li>
    </ul>
    <br><br><br><br> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
</style>
