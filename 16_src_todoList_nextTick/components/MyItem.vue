<template>
<li>
    <label>
    <input 
        type="checkbox" 
        :checked="todoObj.done" 
        @change="handleCheck(todoObj.id)"
    />
    
    <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则：修改了props，但Vue没有监测到 -->
    <!-- <input type="checkbox" v-model="todoObj.done"/> -->
    
    <span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
    <input 
    type="text" 
    v-show="todoObj.isEdit" 
    :value="todoObj.title" 
    @blur="handleBlur(todoObj,$event)"
    ref="inputTitle"
    >
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
    <button v-show="!todoObj.isEdit" class="btn btn-edit" @click="handleEdit(todoObj)">编辑</button>
</li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    //声明接收todo
    props:['todoObj'],
    methods:{
        //勾选or取消勾选
        handleCheck(id){
            //通知App组件将对应的todoObj的done值取反
            // this.checkTodoObj(id)
            this.$bus.$emit('checkTodoObj',id)
        },
        //删除
        handleDelete(id){
            if(confirm('确定删除吗？')){
                //通知App组件将对应的todoObj删除
                // this.deleteTodoObj(id)//此处的'deleteTodoObj'为函数名
                // this.$bus.$emit('deleteTodoObj',id)//此处的'deleteTodoObj'为自定义事件的事件名
                pubsub.publish('deleteTodoObj',id)//此处的'deleteTodoObj'为订阅消息的消息名
            }
        },
        //编辑
        handleEdit(todoObj){
            //判断todoObj对象身上有没有isEdit的属性
            if(todoObj.hasOwnProperty('isEdit')){
                todoObj.isEdit = true
            }else{
                // console.log('todoObj身上没有isEdit，为其追加一个isEdit属性')
                this.$set(todoObj,'isEdit',true)
            }
            // $nextTick()会在DOM节点更新完毕之后再执行
            this.$nextTick(function(){ 
                this.$refs.inputTitle.focus()
            })
        },
        //失去焦点回调函数（真正执行修改逻辑）
        handleBlur(todoObj,e){
            todoObj.isEdit = false
            // console.log(todoObj.id,e.target.value)
            if(!e.target.value.trim()) return alert('输入不能为空！')
            this.$bus.$emit('updateTodoObj',todoObj.id,e.target.value)
        }
    }

}
</script>

<style scoped>
    /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }

    li:hover{
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>