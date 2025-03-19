<template>
    <el-container id="container">
        <el-aside width="250px">
            <el-container id="top">
                <img style="margin: auto; height: 25px; width: 25px; margin-right: 0;" src="../assert/logo.png" alt="">
                <div style="margin: auto; margin-left: 10px; color: #ffffff; font-size: 17px;">E-commerce</div>
            </el-container>
            <el-menu 
            :default-active="$route.path"
            style="height: 100%; background-color=#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="selectItem">
            <el-submenu index="1">
                <template #title>
                    <i class="el-icon-s-order"></i>
                    <span>order manage</span>
                </template>
                <el-menu-item index="/home/order/0">normal order</el-menu-item>
                <el-menu-item index="/home/order/1">excepted order</el-menu-item>
            </el-submenu>
        </el-menu>
        </el-aside>
    </el-container>

</template>

<script>
import Storage from '@/tools/Storage'
import { ElMessage } from 'element-plus';
import { he } from 'element-plus/es/locale';
export default {
    
    name: 'Home_Demo'
}
</script>