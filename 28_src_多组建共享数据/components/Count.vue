<template>
    <div>
      <!-- 模板里面能看见vc里面的所有东西，不需要在前面加this -->
      <h1>当前求和为：{{ sum }}</h1>
      <h3>当前求和放大10倍后的值为：{{ bigSum }}</h3>
      <h3>我在{{school}}学习{{ subject }}</h3>
      <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
      <select v-model.number="numberSelectedByUser">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increment(numberSelectedByUser)">+</button>
      <button @click="decrement(numberSelectedByUser)">-</button>
      <button @click="incrementOdd(numberSelectedByUser)">当前求和为奇数再加</button>
      <button @click="incrementWait(numberSelectedByUser)">等一等再加</button>
    </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
      name:'Count',
      data(){
        return{
          numberSelectedByUser:1, //用户选择的数字
        }
      },
      computed:{
        //借助mapState生成计算属性，从state中读取数据。（数组写法）
        ...mapState(['sum','school','subject','personList']), 
        //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
        ...mapGetters(['bigSum'])
      },
      methods:{
        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
        ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),
        //借助mapActions生成对应的方法，方法中会调用dispatch去联系mutations（对象写法）
        ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'}),
      },
      mounted(){
        // console.log('Count',this.$store)
        // const x = mapState({sum:'sum',school:'school',subject:'subject'})
        // const y = mapGetters({bigSum:'bigSum'})
        // console.log(x,'@',y)
      }
  }
</script>

<style scoped>
 button{
  margin-left: 5px;
 }
</style>