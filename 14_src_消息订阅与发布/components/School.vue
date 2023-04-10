<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data() {
      return {
        name:'尚硅谷',
        address:'北京-昌平'
      }
    },
    mounted(){
      // console.log('School',this.$bus)
      // 使用 全局事件总线 实现通信
      // this.$bus.$on('hello',(data)=>{
      //   console.log('我是School组件，收到了数据：',data)
      // })
      this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
        console.log(this) //使用箭头函数
        // console.log('有人发布了hello消息，hello消息的回调函数执行了。',msgName,data)
      })
    },
    beforeDestroy(){
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
 .school{
  background-color: skyblue;
  padding: 5px;
 }
</style>