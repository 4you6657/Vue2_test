export default{
    install(Vue){
        //全局过滤器的注册
        Vue.filter('mySlice',function(val){
            return val.slice(0,4)
        })
        
        //定义全局指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时(一上来)，由Vue调用bind()函数
            bind(element,binding){
                element.value = binding.value
            },
            //指令所在元素被插入页面时，由Vue调用inserted()函数
            inserted(element,binding){
                element.focus()
            },
            //指令所在的模板被重新解析时，由Vue调用update()函数
            update(element,binding){
                element.value = binding.value
                element.focus()
            }
        })
        //定义混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        })

        //给Vue原型上添加一个方法（vm和vc就都能用了）
    Vue.prototype.hello = ()=>{alert('你好！')}
    }
}