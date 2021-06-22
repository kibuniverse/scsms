<template>
  <div>
    <div class="header">
        <div class="top-left">
          <img src="../assets/Logo (2).png" alt="" >
          <el-dropdown>
            <span class="el-dropdown-link">
              长安区<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>长安区</el-dropdown-item>
                <el-dropdown-item>未央区</el-dropdown-item>
                <el-dropdown-item>灞桥区</el-dropdown-item>
                <el-dropdown-item>雁塔区</el-dropdown-item>
                <el-dropdown-item>碑林区</el-dropdown-item>
                <el-dropdown-item>莲湖区</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="top-center">
          <div @click="toBuyCar">我要买车</div>
          <div @click="toSaleCar">我要卖车</div>
          <div @click="toMyCar">我的车</div>
        </div>
        <div class="top-right">
          <img src="../assets/user.png" alt="">
          <span>登录</span>
        </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">Footer</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import router from '../router/index.ts'

export default defineComponent({
  name: 'Main',
  components: {},
  setup() {
    function toBuyCar () {
      router.push('buy')
    };
    function toMyCar () {
      router.push('selfcar')
    };
    function toSaleCar () {
      router.push('sale')
    };

    return {
      toSaleCar,
      toMyCar,
      toBuyCar,
    };
  }
})
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    background-color: rgb(252, 252, 252);
    color: #333;
    text-align: center;
    height: 60px;
    top: 0;
  }

  .footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 60px;
    bottom: 0;
  }

  .top-left  img {
    width: 60px;
    height: 60px;
    margin-left: 100px;
    float: left;
  }

  .el-dropdown {
    float: left;
  }
  .el-dropdown-link:hover {
    color: #409EFF;
  }
  .el-dropdown-link {
    margin-left: 30px;
    line-height: 60px;
    cursor: pointer;
    /* color: #409EFF; */
    color: #333;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .top-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin-right: 140px;
  }

  .top-right {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    text-align: center;
    margin-right: 100px;
  }
  .top-right img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  .main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* margin-top: 60px;
    margin-bottom: 60px; */
    line-height: 560px;
  }

</style>
