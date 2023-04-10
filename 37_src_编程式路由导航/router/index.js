//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
//创建并暴露一个路由器
export default new VueRouter({
    //默认一级路由
    routes:[
        {
            name:'routeAbout',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            // 配置二级路由
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    name:'routeMessage',
                    path:'message',
                    component:Message,
                    children:[
                    {
                        name:'routeDetail',
                        path:'detail', //使用占位符声明接收params参数
                        component:Detail,
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
