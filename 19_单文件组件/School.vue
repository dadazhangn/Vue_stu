<template>
  <!-- //组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互相关代码（数据 方法）
//使用默认暴露 
// 它用于暴露模块中的变量、函数、类或对象，以便其他模块可以引入和使用
export default {
  name: 'School', //name和文件名最好保持一致
  data() {
    return {
      msg: '锤石',
      name: '清华',
      address: '北京'
    }
  },
  methods: {
    showName() {
      alert(this.name)
    }
  },
}
</script>

<style>
/* 租价的样式 */
.demo {
  background-color: orange;
}
</style>

