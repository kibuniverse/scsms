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
            title="请填写卖车信息"
            v-model="centerDialogVisible"
            width="500px"
            center
          >
            <div>
              <el-form :model="salecarForm" label-width="80px">
                <el-form-item label="车型">
                  <el-cascader
                    class="sell-cars"
                    v-model="value"
                    :options="options"
                    :props="props"
                  >
                  </el-cascader>
                </el-form-item>
                <el-form-item label="购车时间" style="width: 400px">
                  <el-input v-model="salecarForm.buyTime"></el-input>
                </el-form-item>
                <el-form-item label="行驶里程" style="width: 400px">
                  <el-input v-model="salecarForm.km"></el-input>
                </el-form-item>
                <el-form-item label="颜色" style="width: 400px">
                  <el-input v-model="salecarForm.color"></el-input>
                </el-form-item>
                <el-form-item label="价格" style="width: 400px">
                  <el-input v-model="salecarForm.price"></el-input>
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
import {
  defineComponent,
  ref,
  watchEffect,
  reactive,
  onMounted,
  toRefs,
} from "vue";
import {
  salecar,
  getCarBrand,
  getCarSeries,
  getCarModels,
} from "../api/sale-car/index";
export default defineComponent({
  name: "SaleCar",
  components: {},
  setup() {
    const centerDialogVisible = ref(false);
    watchEffect(() => console.log(centerDialogVisible));
    onMounted(() => {
      getCarBrand({}).then((res) => {
        console.log(res);
        console.log(carState.options);
        carState.options = res.map((item: string) => ({
          value: item,
          label: item,
          children: [],
        }));
      });
    });
    const salecarForm = reactive({
      brand: "",
      series: "",
      model: "",
      buyTime: "",
      km: 1800000,
      color: "",
      price: 10000,
    });
    const carState = reactive({
      value: [],
      props: {
        expandTrigger: "hover",
        lazy: true,
        lazyLoad(node: any, resolve: any) {
          const { level } = node;
          console.log(node.label);
          if (level === 1) {
            getCarSeries(node.label).then((res) => {
              const data = res.map((seriesItem) => ({
                value: seriesItem,
                label: seriesItem,
                leaf: level > 1,
              }));
              resolve(data);
            });
          }
          if (level === 2) {
            getCarModels(node.label).then((res) => {
              console.log(res);
              const data = res.map((modelItem) => ({
                value: modelItem,
                label: modelItem,
                leaf: level > 1,
              }));
              resolve(data);
            });
          }
        },
      },
      options: [],
    });

    return {
      centerDialogVisible,
      salecarForm,
      ...toRefs(carState),
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