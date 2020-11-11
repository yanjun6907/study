import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [

  {
    path:'/',
    component: () => import('../views/login/login')
  },
  {
    path:'/home',
    component: () => import('../views/home/home'),
    children:[
      {
        path:'/',
        component: () => import('../views/pages/welcome/welcome')
      },
      {
        path:'/user',
        component: () => import('../views/pages/userInfo/userList')
      },
      {
        path:'/manager',
        component: () => import('../views/pages/backendManage/accountManage/accountManage')
      },
      {
        path:'/password',
        component: () => import('../views/pages/backendManage/pswCheck/pswCheck')
      },
      {
        path:'/role',
        component: () => import('../views/pages/backendManage/roleManage/roleManage')
      },
      {
        path:'/articleEdit',
        component: () => import('../views/pages/contentManage/article/articleEdit/articleEdit')
      },
      {
        path:'/article',
        component: () => import('../views/pages/contentManage/article/articleList/articleList')
      },
      {
        path:'/articleIncrease',
        component: () => import('../views/pages/contentManage/article/articleIncrease/articleIncrease')
      },
      {
        path:'/videoEdit',
        component: () => import('../views/pages/contentManage/video/videoEdit/videoEdit')
      },
      {
        path:'/video',
        component: () => import('../views/pages/contentManage/video/videoList/videoList')
      },
      {
        path:'/videoInrease',
        component: () => import('../views/pages/contentManage/video/videoInrease/videoInrease')
      },
      {
        path:'/notice',
        component: () => import('../views/pages/contentManage/bulletinManage/bulletinManage')
      },
      {
        path:'/hole',
        component: () => import('../views/pages/contentManage/treeHole/treeHole')
      },
      {
        path:'/topic',
        component: () => import('../views/pages/contentManage/leaveMessage/leaveList/leaveList')
      },
      {
        path:'/leaveEdit',
        component: () => import('../views/pages/contentManage/leaveMessage/leaveEdit/leaveEdit')
      },
      {
        path:'/module',
        component: () => import('../views/pages/backendManage/moduleManage/moduleManage')
      },
      {
        path: "*",
        redirect: '/404'
      },
      {
        path: "/404",
        component: () => import('../components/404/erorr')
      }
    ],
    meta:{requireAuth:true},
    beforeEnter: (to, from, next) => {
      let auth=window.sessionStorage.getItem('auth_token');
      if(auth){
        next();
      }else{
        next('/');
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
