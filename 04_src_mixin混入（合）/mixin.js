export const mixin = {
    methods:{
        showName(){
            alert(this.name)
        },
        mounted(){
            console.log('你好啊！')
        }
    },
}
export const secMixin = {
    data(){
        return{
            x:100,
            y:200
        }
    },
}
