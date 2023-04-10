<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- <slot :games="games"></slot>：将Category组件里data里的数据传给了该插槽的使用者App -->
        <slot :games="games"></slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    data() {
        return {
          games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        }
      },
    props:['title']
}
</script>

<style>
  .category{
    background-color:skyblue;
    width: 200px;
    height:300px;
  }
  h3{
    text-align: center;
    background-color: orange;
  }

</style>