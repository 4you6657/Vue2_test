//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建一个路由器
const router = new VueRouter({
    //默认一级路由
    routes:[
        {
            name:'routeAbout',
            path:'/about',
            component:About,
            meta:{title:'ABOUT_INFO',isAuth:false}
        },
        {
            name:'routeHome',
            path:'/home',
            component:Home,
            meta:{title:'HOME_INFO'},
            // 配置二级路由
            children:[
                {
                    name:'routeNews',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'NEWS_INFO'}
                },
                {
                    name:'routeMessage',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'MESSAGE_INFO'},
                    children:[
                    {
                        name:'routeDetail',
                        path:'detail', //使用占位符声明接收params参数
                        component:Detail,
                        meta:{isAuth:true,title:'DETAIL_INFO'},
                        //props的第一种写法，值为对象，该对象中的所有 key/value 都会以props的形式传给Detail组件。
                        // props:{a:1,b:'hello'}
                        
                        //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数以props形式传给Detail组件。
                        // props:true

                        //props的第三种写法，值为函数
                        props:function($route){
                            return {
                                id:$route.query.id,
                                title:$route.query.title
                            }
                        }
                    }
                    ]
                }
            ]
        },
    ]
})

//全局前置路由守卫：初始化的时候被调用；每次路由切换之前被调用。
router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from,next) 
    if(to.meta.isAuth){//判断是否需要鉴定权限
        if(localStorage.getItem('school') === 'atguigu'){
            // document.title = to.meta.title || 'SYSTEM' //写了1遍
            next()//路由守卫放行
        }else{
            alert('学校名称有误，无权限查看！')
        }
    }else{
        // document.title = to.meta.title || 'SYSTEM' //写了2遍
        next()//路由守卫放行
    }
})

//全局后置路由守卫：初始化的时候被调用；每次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log('后置路由守卫',to,from)
    document.title = to.meta.title || 'SYSTEM' //只用写1遍
})

//暴露路由器
export default router