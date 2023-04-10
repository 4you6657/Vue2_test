<template>
<div>
  <ul>
    <h3>Message组件内容</h3>
    <li v-for="msg in messageList" :key="msg.id">
        <!-- 跳转路由并携带params参数，to的字符串写法（模板字符串） -->
        <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->
        
        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <router-link 
        :replace="true" 
        :to="{
            // path:'/home/message/detail',
            name:'routeDetail',
            query:{
                id:msg.id,
                title:msg.title
            }
        }">
            {{ msg.title }}
        </router-link>
        <button @click="pushShow(msg)">push查看</button>
        <button @click="replaceShow(msg)">replace查看</button>
    </li>
  </ul>
  <hr>
  <router-view></router-view>
</div>
</template>

<script>
export default {
    name:'Message',
    data(){
        return{
            messageList:[
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'},
            ]
        }
    },
    methods: {
        pushShow(msg){
            this.$router.push({
                name:'routeDetail',
                query:{
                    id:msg.id,
                    title:msg.title
                }
            })
        },
        replaceShow(msg){
            this.$router.replace({
                name:'routeDetail',
                query:{
                    id:msg.id,
                    title:msg.title
                }
            })
        }
    },
    beforeDestroy(){
        console.log('Messages组件即将被销毁！')
    }
}
</script>
