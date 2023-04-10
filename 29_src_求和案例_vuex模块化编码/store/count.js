//求和相关的配置
export default {
    namespaced:true,
    actions:{
    /**
     * context:上下文对象
     * value:值是numberSelectedByUser的值
     */
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
    },
    mutations:{
        INCREMENT(state,value){
            // console.log('$$$$$$',value)
            console.log('mutations中的INCREMENT方法被调用了！','state:',state,'value:',value)
            state.sum += value
        },
        DECREMENT(state,value){
            console.log('mutations中的DECREMENT方法被调用了！','state:',state,'value:',value)
            state.sum -= value
        },
    },
    state:{
        sum:0, //当前的和
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
}

