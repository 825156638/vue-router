import Vue from 'vue'
import Router from 'vue-router'
import hello from '../components/hello.vue'
import hi from '../components/hi.vue'

import Student from '../components/user/Student.vue'
import Tearch from '../components/user/Tearch.vue'

import FileNotFound from '../components/FileNotFound.vue'

Vue.use(Router)

const routes = [
  {
    path:'/hello',
    component:hello,
    name:'hello',
    children:[
      {
        path:'hi',
        component:hi,
        name:'hi'
      }
    ]
  },

  {
    //在不同页面加载不同组件
  //user路径下对应两个组件
    path:'/user',
    
    // redirect:'/hello'是路由重定向
    components:{
      Student,
      Tearch
    }
  },

  {
    //通过url来传递参数
    // 指定参数名，参数名后面加()，里面写正则表达式，可以匹配路径
    path:'/hello/:id(\\d+)/:name',
    component:hello
  },

  {
    //路由独享守卫
    //路由钩子函数、守卫，可以控制路由的访问
    path:'/hello',
    component:hello,
    name:'hello',
    beforeEnter(to,from,next){
      console.log('去到',to.fullPath);
      console.log('来自',from.fullPath);
       // 当调用next()或者next(true)的时候，路由正常跳转
       next(true);
    }
  },

  {
    //路径*匹配
// 如果有个路径匹配不到，跳转到404页面，注意路径是从上向下匹配的，* 这个匹配应该放到路由最后：
    path:'*',
    component:FileNotFound
  }
]

const router = new Router({
  routes,

  //history模式。去除路由后面 '#' 符号
  mode:'history',
})

//全局守卫
//前置钩子
// router.beforeEach((to,from,next) =>{

// })
// //后置钩子
// router.afterEach((to,from,next) => {
  
// })

export default router;