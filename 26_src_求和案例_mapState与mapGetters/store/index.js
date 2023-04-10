//该文件用于创建vuex中最为核心的store

//引入Vue核心库
import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex'
//使用Vuex插件
Vue.use(Vuex)

//准备actions对象：用于响应组件中的动作
const actions = {
    /**
     * context:上下文对象
     * value:值是numberSelectedByUser的值
     */
    /* increment(context,value){
        // console.log('actions中的increment方法被调用了！','context:',context,'value:',value)
        // console.log('@',context,'@@',value)
        context.commit('INCREMENT',value)
    },
    decrement(context,value){
        // console.log('actions中的decrement方法被调用了！','context:',context,'value:',value)
        context.commit('DECREMENT',value)
    }, */
    incrementOdd(context,value){
        // console.log('actions中的incrementOdd方法被调用了！','context:',context,'value:',value)
        // console.log('@',context,'@@',value)
        if(context.state.sum % 2){
            context.commit('INCREMENT',value)
        }  
    },
    incrementWait(context,value){
        // console.log('actions中的incrementWait方法被调用了！','context:',context,'value:',value)
        // console.log('@',context,'@@',value)
        setTimeout(() => {
            context.commit('INCREMENT',value)
        }, 500);
    }

}

//准备mutations对象：用于操作（加工）数据（state）
const mutations = {
    INCREMENT(state,value){
        // console.log('mutations中的INCREMENT方法被调用了！','state:',state,'value:',value)
        state.sum += value
    },
    DECREMENT(state,value){
        // console.log('mutations中的DECREMENT方法被调用了！','state:',state,'value:',value)
        state.sum -= value
    }
}

//准备state对象：用于存储数据（初始化数据源）
const state = {
    sum:0, //当前的和
    school:'尚硅谷',
    subject:'前端'
}

//准备getters：用于将state中的初始数据源进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}


//创建并暴露store
export default new Vuex.Store({
    // actions:actions,
    // mutations:mutations,
    // state:state
    
    //简写形式:
    actions,
    mutations,
    state,
    getters
})

//暴露（导出）store
// export default store