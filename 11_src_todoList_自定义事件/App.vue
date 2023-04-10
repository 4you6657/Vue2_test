<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addTodoObj="addTodoObj"/>
      <MyList :todoList="todoList" :checkTodoObj="checkTodoObj" :deleteTodoObj="deleteTodoObj"/>
      <MyFooter :todoList="todoList" @checkAllTodoObj="checkAllTodoObj" @clearAllTodoObj="clearAllTodoObj"/>
    </div>
  </div>
</div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
    name:'App',
    data(){
        return{
          //由于todoList是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
          todoList:JSON.parse(localStorage.getItem('todoList')) || []
        }
    },
    methods:{
      //添加一个todoObj
      addTodoObj(todoObj){
        this.todoList.unshift(todoObj)
      },
      //勾选or取消勾选一个todoObj
      checkTodoObj(id){
        this.todoList.forEach((todoObj)=>{
          //将对应的todoObj的done值取反
          if(todoObj.id === id) todoObj.done = !todoObj.done
        })
      },
      //删除一个todoObj
      deleteTodoObj(id){
        this.todoList = this.todoList.filter( todoObj => todoObj.id !== id)
      },
      //全选or取消全选
      checkAllTodoObj(done){
        this.todoList.forEach((todoObj)=>{
          todoObj.done = done
        })
      },
      //清除所有已经完成的todoObj
      clearAllTodoObj(){
        this.todoList = this.todoList.filter((todoObj)=>{
          return !todoObj.done
        })
      }
    },
    components:{MyHeader,MyList,MyFooter},
    watch:{
      todoList:{
        deep:true,
        handler(value){
          // console.log(value)
          localStorage.setItem('todoList',JSON.stringify(value))
        }
      }
    }
  }
</script>

<style>
  /*base*/
  body {
  background: #fff;
  }

  .btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  }

  .btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
  }

  .btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
  }

  .btn:focus {
  outline: none;
  }

  .todo-container {
  width: 600px;
  margin: 0 auto;
  }
  .todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  }
</style>