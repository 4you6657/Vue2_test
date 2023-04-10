<template>
  <div>
    <Count/>
  </div>
</template>

<script>
  //引入组件
  import Count from './components/Count.vue'

  export default {
      name:'App',
      components:{Count}, //注册组件
  }
</script>

<style scoped>
  .container,.foot{
    display:flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
  img{
    width: 100%;
  }
  h4{
    text-align:center;
  }
</style>

