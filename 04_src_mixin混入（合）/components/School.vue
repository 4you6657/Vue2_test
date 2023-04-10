<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
//引入一个mixin
//import {mixin,secMixin} from '../mixin'
export default {
    name:'School',
    data() {
      // console.log(this)
      return {
        name:'尚硅谷',
        address:'北京-昌平',
        x:888
      }
    },
    //mixins:[mixin,secMixin],
}
</script>