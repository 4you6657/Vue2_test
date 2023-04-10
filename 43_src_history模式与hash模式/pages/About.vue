<template>
  <h2>About组件内容</h2>
</template>

<script>
export default {
    name:'About',
/*     beforeDestroy() {
      console.log('About组件即将被销毁!')
    },
    destroyed(){
      console.log('About组件被销毁!')
    }, */
/*     mounted(){
      console.log('About组件挂载完毕！',this)
      window.aboutRoute = this.$route
      window.aboutRouter = this.$router
    } */
    mounted(){
      // console.log('%%%',this.$route)
    },
    //通过路由规则，进入该组件时调用。
    beforeRouteEnter (to, from, next) {
      // console.log('About------beforeRouteEnter',to,from,next)
      if(to.meta.isAuth){//判断是否需要鉴定权限
        if(localStorage.getItem('school') === 'atguigu'){
          // document.title = to.meta.title || 'SYSTEM' //写了1遍
          next()//进入时路由守卫放行
        }else{
          alert('学校名称有误，无权限查看！')
        }
      }else{
        // document.title = to.meta.title || 'SYSTEM' //写了2遍
        next()//进入时路由守卫放行
      }
    },
    //通过路由规则，离开该组件时调用。
    beforeRouteLeave (to, from, next) {
      console.log('About------beforeRouteLeave',to,from,next)
      next()//离开时路由守卫放行
    }
}
</script>
