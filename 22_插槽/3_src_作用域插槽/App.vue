<template>
  <div class="container">
    
    <Category title="游戏">
      <template scope="receiver">
        <ul>
          <li v-for="(g,index) in  receiver.games" :key="index">{{g}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!-- ES6结构赋值 -->
      <template scope="{games}">
        <ol>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
      </template>
    </Category>
    
    <Category title="游戏">
      <!-- ES6结构赋值 -->
      <template slot-scope="{games}">
        <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>>
      </template>
    </Category>
  </div>
</template>

<script>
  //引入组件
  import Category from './components/Category.vue'

  export default {
      name:'App',
      components:{Category}, //注册组件
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

