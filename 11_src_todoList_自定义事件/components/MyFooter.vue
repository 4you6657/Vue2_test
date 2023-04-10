<template>
<div class="todo-footer" v-if="total">
<label>
    <input type="checkbox" v-model="isAll"/>
</label>
<span>
    <span>已完成{{ doneTotal }}</span> / 全部{{total}}
</span>
<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
</div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todoList'],
    computed:{
        total(){
            return this.todoList.length
        },
        doneTotal(){
            return this.todoList.reduce((pre,todoObj)=> pre + (todoObj.done ? 1 : 0) ,0)
        },
        isAll:{
            get(){
                return this.doneTotal === this.total && this.total > 0
            },
            set(value){
                // this.checkAllTodoObj(value)
                this.$emit('checkAllTodoObj',value)
            }
        }
    },
    methods:{
        //清空所有'已完成'
        clearAll(){
            // this.clearAllTodoObj()
            this.$emit('clearAllTodoObj')
        }
    },
}
</script>

<style scoped>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>