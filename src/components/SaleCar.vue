<template>
  <div>
    <div class="sell-area">
      <div class="sell-center">
        <div class="sell-login">买卖二手车，就选淘车</div>
        <div class="sell-search">
          <el-input
            class="search-input"
            placeholder="请输入内容"
            v-model="input"
            clearable
          >
          </el-input>
          <el-button
            @click="centerDialogVisible = true"
            class="sell-btn1 sell-btn"
            >高速卖车</el-button
          >
          <el-dialog
            title="请填写爱车信息"
            v-model="centerDialogVisible"
            width="500px"
            center
          >
            <div>
              <el-form :model="loginForm" label-width="80px">
                <el-form-item label="车">
                  <el-radio-group v-model="registerForm.gender">
                    <el-cascader
                      class="sell-cars"
                      v-if="centerDialogVisible"
                      :options="options"
                      :show-all-levels="true"
                      clearable
                    >
                    </el-cascader>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="购车时间" style="width: 400px">
                  <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="行驶里程" style="width: 400px">
                  <el-input
                    show-password
                    v-model="loginForm.password"
                  ></el-input>
                </el-form-item>
                <el-form-item label="颜色" style="width: 400px">
                  <el-input
                    show-password
                    v-model="loginForm.password"
                  ></el-input>
                </el-form-item>
                <el-form-item label="价格" style="width: 400px">
                  <el-input
                    show-password
                    v-model="loginForm.password"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false"
                  >取 消</el-button
                >
                <el-button type="primary" @click="centerDialogVisible = false"
                  >确 定</el-button
                >
              </span>
            </template>
          </el-dialog>

          <el-button class="sell-btn2 sell-btn">快速估价</el-button>
        </div>
        <div class="sell-newcar">
          <a href="https://xinche.guazi.com/www/fyc"
            >首付10%，爆款新车直接带回家 ></a
          >
        </div>
      </div>
    </div>
    <!-- <div class="sell-cars">
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
      <el-cascader 
        v-if="centerDialogVisible"
        :options="options" 
        :show-all-levels="true"
        clearable>
        
      </el-cascader>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, reactive, onMounted, toRefs } from "vue";
import { salecar, getCarSeries } from "../api/sale-car/index";
export default defineComponent({
  name: "SaleCar",
  components: {},
  setup() {
    const centerDialogVisible = ref(false);
    watchEffect(() => console.log(centerDialogVisible));
    onMounted(() => {
      getCarSeries({}).then(res => console.log(res))
    })
    const salecarForm = reactive({
      brand: "",
      series: "",
      model: "",
      buyTime: "",
      km: 1800000,
      color: "",
      price: 10000,
    });
    const state = reactive({
      Option: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
          ],
        },
      ],
    });

    getCarSeries() 

    return {
      centerDialogVisible,
      salecarForm,
      ...toRefs(state),
    };
  },
});
</script>

<style>
.sell-area {
  width: 100%;
  /* height: 350px; */
  background-image: url("../assets/car.png");
  /* background-color: red; */
}
.sell-center {
  width: 100%;
  height: 350px;
  /* line-height: 350px; */
}
.sell-login {
  padding-top: 50px;
  font-size: 44px;
  text-align: center;
  line-height: 80px;
  color: #fff;
}
.sell-search {
  position: relative;
  z-index: 1;
  height: 56px;
  padding-top: 38px;
  padding-left: 425px;
}
.search-input {
  float: left;
  width: 408px;
  height: 56px;
  line-height: 58px;
  border: none;
  background: #fff;
}
.sell-btn1 {
  background: #21ac38;
  margin-right: 15px;
}
.sell-btn2 {
  background: #66c675;
}
.sell-btn {
  float: left;
  width: 148px;
  height: 56px;
  border: none;
  font-size: 20px;
  font-family: "microsoft yahei";
  color: #fff;
}
.sell-newcar {
  width: 400px;
  height: 26px;
  line-height: 26px;
  margin: 30px auto;
  font-size: 18px;
  color: #fff;
  padding-left: 34px;
  background-position: -400px -130px;
}
.sell-newcar a {
  color: #fff;
}
a {
  text-decoration: none;
}
.sell-cars {
  /* padding-left: 80px; */
  /* align-items: center; */
}
/* .dialog-footer {
    height: 70px;
    z-index: 999;
  } */
</style>