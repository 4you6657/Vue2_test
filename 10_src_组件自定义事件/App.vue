<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名是：{{ studentName }}</h1>
    
    <!-- 通过父组件给子组件传递函数类型的props，实现子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
    
    
    <!-- 通过父组件给子组件绑定一个自定义事件，实现子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student @atguigu="getStudentName" @diyEvent="myEvent"/> -->
    <!-- 
      解释：
      当v-on（或@）写在Student组件标签上时，说明v-on（或@）给Student这个组件的实例对象（vc）身上
      绑定了一个事件，事件名称叫atguigu，如果有人触发了这个事件，getStudentName()方法就会被调用。
      原则：给谁绑定的事件，找谁来触发该事件。
     -->

     <!-- 通过父组件给子组件绑定一个自定义事件，实现子给父传递数据（第二种写法，使用ref） -->
    <Student ref="student" @click.native="show"/> 

    <!-- 组件上也可以绑定原生DOM事件，需要使用native修饰符 -->
    <!-- <Student ref="student" @click.native="show"/> -->
  </div>
</template>

<script>
//引入Student组件
import Student from './components/Student.vue'
//引入School组件
import School from './components/School.vue'

export default {
    name:'App',
    components:{Student,School},
    methods:{
      getSchoolName(name){
        console.log('App收到了学校名称：',name)
      },
      getStudentName(name,...params){
        console.log('App收到了学生姓名：',name,params)
        this.studentName = name
      },
      myEvent(){
        console.log('我设置的diyEvent事件被触发了！')
      },
      show(){
        alert(123)
      }
    },
    data(){
      return{
        msg:'你好!',
        studentName:''
      }
    },
    mounted(){
        this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
        // this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
    }

}
</script>

<style scoped>
.app{
  background-color: grey;
  padding: 5px;
}
</style>