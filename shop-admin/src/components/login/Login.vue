<template>
    <div id="container">
        <div id="title">
            <h1>Manage System</h1>
        </div>
        <div class="input">
            <el-input v-model="name" prefix-icon="el-icon-user" placeholder="please input username"></el-input>
        </div>
        <div class="input">
            <el-input v-model="password" prefix-icon="el-icon-lock" placeholder="please input password" show-password></el-input>
        </div>
        <div class="input">
            <el-button @click="login" style="width: 500px;" type="primary" :disabled="disabled">submit</el-button>
        </div>
    </div>
</template>

<script>
import Storage from '@/tools/Storage'
import { ElMessage } from 'element-plus';
export default {
    name: 'Login_Demo',
    data() {
        return {
            name: '',
            password: '',
            // disabled: false
        }
    },
    computed: {
        disabled() {
            return this.name.length === 0 || this.password.length === 0
        }
    },
    methods: {
        login() {
            Storage.commit("registUserInfo", {
                name: this.name,
                password: this.password
            })
            ElMessage({
                message: 'login success',
                type: 'success',
                duration: 3000
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 3000)
        }
    }
}
</script>

<style scoped> 
#container {
    background: #595959;
    background-image: url("@/assets/background.jpeg");
    background-size: cover; /* 使背景图覆盖整个容器 */
    background-position: center; /* 使背景图居中 */
    height: 100%;
    width: 100%;
    position: absolute;
}
#title {
    text-align: center;
    color: azure;
    margin-top: 200px;
}
.input {
    margin: 20px auto;
    width: 500px;
}
</style>