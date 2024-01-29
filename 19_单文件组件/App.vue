<template lang="">
  <div>
    <!-- 单文件组件可以使用自闭和 -->
    <School/>
    <Student/>
  </div>
</template>
<script>
//引入组件
import School from './School.vue';
import Student from './Student.vue';

export default {
  name: 'App',
  //注册
  components:{
    School,
    Student
  }


}
</script>
<style lang="">
  
</style>