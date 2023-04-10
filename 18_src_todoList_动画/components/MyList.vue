<template>
<ul class="todo-main">
    <transition-group name="todoObj" appear>
        <MyItem 
            v-for="todoObj in todoList" 
            :key="todoObj.id" 
            :todoObj="todoObj" 
        />
    </transition-group>
</ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{MyItem},
    //声明接收App组件传递过来的数据
    props:['todoList']

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

    .todoObj-enter-active{
        animation : atguigu 0.5s;
    }
    .todoObj-leave-active{
        animation : atguigu 0.5s reverse;
    }

    @keyframes atguigu {
        from{
            transform:translateX(-100%);
        }
        to{
            transform:translateX(0px);
        }
    } 
</style>