<template>
<ul class="todo-main">
    <MyItem 
    v-for="todoObj in todoList" 
    :key="todoObj.id" 
    :todoObj="todoObj" 
    :checkTodoObj="checkTodoObj" 
    :deleteTodoObj="deleteTodoObj"
    />
</ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{MyItem},
    //声明接收App组件传递过来的数据，其中todoList是自己用的，checkTodoObj和deleteTodoObj是给子组件MyItem用的。
    props:['todoList','checkTodoObj','deleteTodoObj']

}
</script>

<style scoped>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>