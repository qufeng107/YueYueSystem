//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用Home页面
import Page1  from './views/Page1.vue';
//引用Page2页面
import Page2  from './views/Page2.vue';

import Home  from './views/HomePage.vue';



//定义routes路由的集合，数组类型
const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {path:"/Home",component:Home},
    {path:'/Page1',component:Page1},
    {path:"/Page2",component:Page2},

    //可以配置重定向
    {path:'',redirect:"Home"}

]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router