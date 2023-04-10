<template>
<div class="todo-footer" v-if="total">
<label>
    <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
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
    props:['todoList','checkAllTodoObj','clearAllTodoObj'],
    computed:{
        total(){
            return this.todoList.length
        },
        doneTotal(){
            /*  const x =this.todoList.reduce((pre,current)=>{
                //console.log('@',pre,current)
                return pre + (current.done ? 1 : 0)
            },0)
            console.log(x) */
            return this.todoList.reduce((pre,todoObj)=> pre + (todoObj.done ? 1 : 0) ,0)
        },
        /* isAll(){
            return this.doneTotal === this.total && this.total > 0
        } */
        isAll:{
            get(){
                return this.doneTotal === this.total && this.total > 0
            },
            set(value){
                // console.log('@@@',value)
                this.checkAllTodoObj(value)
            }
        }
    },
    methods:{
        /* checkAll(e){
            // console.log(e.target.checked)
            this.checkAllTodoObj(e.target.checked)
        } */
        clearAll(){
            this.clearAllTodoObj()
        }
    }
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