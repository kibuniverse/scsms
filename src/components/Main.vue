<template>
  <div>
    <div class="header">
        <div class="top-left">
          <img src="../assets/Logo (2).png" alt="" >
          <el-menu class="top-center el-menu-demo" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index='1' @click="toBuyCar">我要买车</el-menu-item>
            <el-menu-item index='2' @click="toSaleCar">我要卖车</el-menu-item>
            <el-menu-item index='3' @click="toMyCar">我的车</el-menu-item>
          </el-menu>
        </div>
        <div class="top-right">
          <img src="../assets/user.png" alt="">
          <el-button type="text"  @click="dialogFormVisible = true">登录</el-button>
        </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">Footer</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import router from '../router'

export default defineComponent({
  name: 'Main',
  components: {},
  methods: {
    handleSelect(key: string, keyPath: any) {
        console.log(key, keyPath);
    }
  },
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
    const state = reactive({
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        formLabelWidth: '120px',
        activeIndex: '1',
        activeIndex2: '1'
      });

    return {
      toSaleCar,
      toMyCar,
      toBuyCar,
      ...toRefs(state),
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
  .top-center:hover {
    cursor:pointer;
  }
  .top-right {
    display: flex;
    justify-content: center;
    align-items: center;
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
