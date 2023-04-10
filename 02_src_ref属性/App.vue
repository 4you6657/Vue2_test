<template>
  <div>
    <h1 v-text="msg" ref="msg"></h1>
    <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
    <School ref="school" />
    <School id="school" />
  </div>
</template>

<script>
//引入School组件
import School from './components/School.vue'

export default {
    name:'App',
    components:{School},
    data(){
        return{
            msg:'欢迎学习Vue!'
        }
    },
    methods:{
        showDOM(){
            // console.log(document.getElementById('msg')) //原生DOM操作
            console.log(this.$refs.msg) //Vue提供的对DOM的操作，获取的是真实DOM元素
            console.log(this.$refs.btn) //Vue提供的对DOM的错做，获取的是真实DOM元素
            console.log(this.$refs.school) //获取School组件的实例对象（vc）
            // console.log(document.getElementById('school'))
        }
    }

}
</script>

<style>

</style>