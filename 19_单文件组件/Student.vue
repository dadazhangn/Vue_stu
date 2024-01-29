<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">点我提示学生名</button>
  </div>
</template>

<script>
export default {
  name: 'Student', 
  data() {
    return {
      msg: '锤石',
      name: '张大',
      age: 22
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
.demo {
  background-color: orange;
}
</style>

