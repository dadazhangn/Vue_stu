<template>
    <el-container id="container">
        <el-aside width="250px" style="background-color: #545c64;">
            <el-container id="top">
                <img style="margin: auto; height: 25px; width: 25px; margin-right: 0;" src="@/assets/logo.png" alt="">
                <div style="margin: auto; margin-left: 10px; color: #ffffff; font-size: 17px;">E-commerce</div>
            </el-container>
            <el-menu 
            :default-active="$route.path"
            style="height: 100%; background-color:#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="selectItem">
            <el-sub-menu index="1">
                <template #title>
                    <!-- <i class="el-icon-s-order"></i> -->
                    <el-icon><Shop /></el-icon>
                    <span>order manage</span>
                </template>
                <el-menu-item index="/home/order/0">normal order</el-menu-item>
                <el-menu-item index="/home/order/1">excepted order</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <i class="el-icon-s-shop"></i>
                    <span>goods manage</span>
                </template>
                <el-menu-item index="/home/goods/0">Ordinary goods</el-menu-item>
                <el-menu-item index="/home/goods/1">Flash sale goods</el-menu-item>
                <el-menu-item index="/home/goods/2">Today's recommendation</el-menu-item>
                <el-menu-item index="/home/goods/3">Product classification</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <i class="el-icon-s-custom"></i>
                    <span>owner manage</span>
                </template>
                <el-menu-item index="/home/ownerList">ownerList</el-menu-item>
                <el-menu-item index="/home/ownerReq">ownerReq</el-menu-item>
                <el-menu-item index="/home/ownerOrder">ownerOrder</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
                <template #title>
                    <i class="el-icon-s-ticket"></i>
                    <span>ticket manage</span>
                </template>
                <el-menu-item index="/home/tradeInfo">Transaction details</el-menu-item>
                <el-menu-item index="/home/tradeList">financial statements</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
                <template #title>
                    <i class="el-icon-s-tools"></i>
                    <span>Basic management</span>
                </template>
                <el-menu-item index="/home/data">Statistics</el-menu-item>
            </el-sub-menu>
        </el-menu>
        </el-aside>
        <!-- 渲染 -->
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>

</template>

<script>
// import Storage from '@/tools/Storage'
// import { ElMessage } from 'element-plus';
// import { he } from 'element-plus/es/locale';
export default {
    
    name: 'Home_Demo'
}
</script>

<style scoped>
    .el-menu-item {
        background-color:#545c64;
    }
</style>