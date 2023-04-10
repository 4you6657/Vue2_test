<template>
    <div>
      <!-- 模板里面能看见vc里面的所有东西，不需要在前面加this -->
      <h1>当前求和为：{{ sum }}</h1>
      <h3>当前求和放大10倍后的值为：{{ bigSum }}</h3>
      <h3>我在{{school}}学习{{ subject }}</h3>
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
        //1、借助mapState生成计算属性，从state中读取数据。（对象写法）
        //ES6:把mapState中的每一组 key:'value' 都展开放入计算属性computed当中
        // ...mapState({sum:'sum',school:'school',subject:'subject'}), 
        //2、借助mapState生成计算属性，从state中读取数据。（数组写法）
        ...mapState(['sum','school','subject']), 
        
        /* ************************************************************ */

        //1、借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
        //ES6:把mapGetters中的每一组 key:'value' 都展开放入计算属性computed当中
        // ...mapGetters({bigSum:'bigSum'})
        //2、借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
        ...mapGetters(['bigSum'])
      },
      methods:{
        //程序员亲自写方法
        /* increment(){
          this.$store.commit('INCREMENT',this.numberSelectedByUser)
        },
        decrement(){
          this.$store.commit('DECREMENT',this.numberSelectedByUser)
        }, */
        
        //二、借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
        ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),

        //三、借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
        // ...mapMutations(['INCREMENT','DECREMENT']),
        
        /* **************************************************************** */
        
        //一、程序员亲自写方法
        /* incrementOdd(){
          this.$store.dispatch('incrementOdd',this.numberSelectedByUser)
        },
        incrementWait(){
          this.$store.dispatch('incrementWait',this.numberSelectedByUser)
        } */

        //二、借助mapActions生成对应的方法，方法中会调用dispatch去联系mutations（对象写法）
        ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'}),
        //三、借助mapActions生成对应的方法，方法中会调用dispatch去联系mutations（数组写法）
        // ...mapActions(['incrementOdd','incrementWait'])



      },
      mounted(){
        // console.log('Count',this.$store)
        const x = mapState({sum:'sum',school:'school',subject:'subject'})
        const y = mapGetters({bigSum:'bigSum'})
        console.log(x,'@',y)
      }
  }
</script>

<style scoped>
 button{
  margin-left: 5px;
 }
</style>