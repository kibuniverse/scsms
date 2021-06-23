<template>
  <div>
    <div class="header">
        <div class="top-left">
          <img src="../assets/Logo (2).png" alt="" >
          <el-menu class="top-center el-menu-demo" :default-active="activeIndex" mode="horizontal" >
            <el-menu-item index='1' @click="toBuyCar">我要买车</el-menu-item>
            <el-menu-item index='2' @click="toSaleCar">我要卖车</el-menu-item>
            <el-menu-item index='3' @click="toMyCar">我的车</el-menu-item>
          </el-menu>
        </div>
        <div class="top-right">
          <img src="../assets/user.png" alt="">
          <el-button type="text" @click="centerDialogVisible = true">
            登陆
          </el-button>
          <el-dialog
            title="二手车直卖网"
            v-model="centerDialogVisible"
            width="500px"
            center>
            <div>
              <el-tabs v-model="activeName">
                <el-tab-pane label="注册" name="first">
                  <el-form ref="registerForm" :model="registerForm" label-width="80px">
                  <el-form-item label="用户名" style="width: 400px">
                    <el-input v-model="registerForm.username"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" style="width: 400px">
                    <el-input show-password v-model="registerForm.password"></el-input>
                  </el-form-item>
                  <el-form-item label="电话号码" style="width: 400px">
                    <el-input v-model="registerForm.phonenum"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱" style="width: 400px">
                    <el-input v-model="registerForm.email"></el-input>
                  </el-form-item>
                  <el-form-item label="性别">
                    <el-radio-group v-model="registerForm.gender">
                      <el-radio label="1">男</el-radio>
                      <el-radio label="0">女</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="登录" name="second" >
                  <el-form ref="loginForm" :model="loginForm" label-width="80px">
                  <el-form-item label="用户名" style="width: 400px">
                    <el-input v-model="loginForm.username"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" style="width: 400px">
                    <el-input show-password v-model="loginForm.password"></el-input>
                  </el-form-item>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
            </div>
            <template #footer>
              <span class="dialog-footer">
                <el-button type="primary" v-if="activeName === 'second'" @click="() => login(loginForm)">登 录</el-button>
                <el-button type="primary" v-if="activeName === 'first'" @click="() => registerFn(registerForm)">注 册</el-button>
              </span>
            </template>
          </el-dialog>
        </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { register, sign } from '../api/auth/auth'
import { ElMessage } from 'element-plus'
import router from '../router'

export default defineComponent({
  name: 'Main',
  components: {},

  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        phonenum: '',
        email: '',
        gender: '男',
      },
      loginForm: {
        username: 'root',
        password: '123',
      }
    }
  },
  setup() {
    const centerDialogVisible = ref(false)
    const activeName = ref('second');
    let userInfo  = ref('')
    function login (signInfo) {
      console.log(signInfo)
      sign(signInfo).then(res => {
        if (res.data.status === 0) {
          ElMessage({
            showClose: true,
            message: '登陆成功',
            type: 'success'
          });
          centerDialogVisible.value = false
          window.localStorage.setItem('username', res.data.data.username)
        }
      })
    }

    function registerFn(form) {
      form.gender = Number(form.gender)
      register(form).then(res => {
        if (res.status === 0) {
          ElMessage({
            showClose: true,
            message: '注册成功',
            type: 'success'
          });
          centerDialogVisible.value = false
        }
      }).catch(err => console.log(err))
    }

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
        formLabelWidth: '120px',
        activeIndex: '1',
        activeIndex2: '1'
      });

    return {
      centerDialogVisible,
      activeName,
      userInfo,
      login,
      registerFn,
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
  .login {
    position: relative;
    margin: 0 auto;
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
