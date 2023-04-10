<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
  //引入组件
  import Search from './components/Search.vue'
  import List from './components/List.vue'
  export default {
      name:'App',
      components:{Search,List}, //注册组件
  }
  
</script>