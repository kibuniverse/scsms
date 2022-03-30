<template>
  <div class="sell-area">
    <div class="sell-center">
      <div class="sell-login">买卖二手车，就选淘车</div>
      <div class="sell-search">
        <el-input
          class="search-input"
          placeholder="请输入内容"
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
                  @change="handleChange"
                >
                </el-cascader>
              </el-form-item>
              <el-form-item :model="salecarForm.buyTime" class="block" style="margin-left: -56px">
                <span class="demonstration">购车日期</span>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  :disabled-date="disabledDate"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="行驶里程" style="width: 400px">
                <el-input v-model="salecarForm.km"></el-input>
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
              <el-button type="primary" @click="salecarsubmit"
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
</template>

<script lang="ts">
import dayjs from "dayjs";
import { ElMessage } from "element-plus";
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
      getCarBrand({}).then((res: { map: (arg0: (item: string) => { value: string; label: string; children: never[]; }) => never[]; }) => {
        console.log(res);
        console.log(carState.options);
        carState.options = res.map((item: string) => ({
          value: item,
          label: item,
          children: [],
        }));
      });
    });
    
    // console.log(window.localStorage.getItem('userId'));
    
    // salecarForm.userId = window.localStorage.getItem('userId');

    
    

    const salecarForm = reactive({
      userId: window.sessionStorage.getItem('userId'),
      brand: "",
      series: "",
      model: "",
      buyTime: '',
      km: 0,
      price: 0,
    });
    // console.log(typeof(salecarForm.userId));
    const carState = reactive({
      value: [],
      props: {
        expandTrigger: "click",
        lazy: true,
        lazyLoad(node: any, resolve: any) {
          const { level } = node;
          // console.log(node.label);
          if (level === 1) {
            // console.log(node.label);
            // salecarForm.brand = node.label;
            // console.log(salecarForm.brand);
            getCarSeries(node.label).then((res: any[]) => {
              const data = res.map((seriesItem) => ({
                value: seriesItem,
                label: seriesItem,
                leaf: level > 1,
              }));
              resolve(data);
            });
          }
          if (level === 2) {
            getCarModels(node.label).then((res: any[]) => {
              // console.log(res);
              // console.log(node.label);
              // salecarForm.series = node.label;
              // console.log(salecarForm.series);
              const data = res.map((modelItem) => ({
                value: modelItem,
                label: modelItem,
                leaf: level > 1,
              }));
              resolve(data);
            });
          }
          // console.log(node.label);
        },
      },
      options: [],
    });

    function salecarsubmit() {
      // console.log(typeof(statetime.shortcuts[0].value));
      // salecarForm.buyTime = statetime.shortcuts[0].value;
      console.log(statetime.value1);
      let d = new Date(statetime.value1); 
      let p = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      // console.log(typeof(p));
      salecarForm.buyTime = p;
      salecar(salecarForm).then((res: any) => {
      // salecarForm.buyTime = statetime.shortcuts[0].value;
        if(res) {
          centerDialogVisible.value = false;
          ElMessage({
            showClose: true,
            message: "订单提交成功！等待管理员审核",
            type: 'success',
          })
        }
      }).catch((err: any) => console.log(err))
    }

    const handleChange = (value: string[]) => {
      // console.log(value);
      salecarForm.brand = value[0];
      salecarForm.series = value[1];
      salecarForm.model = value[2];
    };


    // var now = dayjs()
    // console.log(now);
    
    // var d = new Date(2018, 8, 18);
    // var day = dayjs(d);
    // console.log(day);
    

    const statetime = reactive({
      disabledDate(time: { getTime: () => number; }) {
        return time.getTime() > Date.now();
      },
      shortcuts: [
        {
          text: 'A week ago',
          value: (() => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          })(),
        },
      ],
      value1: '',
    });

    // let d = new Date(statetime.value1); 
    // let p = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    // console.log(p);
    
    
    // const d = new Date(statetime.shortcuts[0].value);
    // const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate());
    // const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds());
    // console.log(resDate);
    // console.log(resTime);

    return {
      centerDialogVisible,
      salecarForm,
      ...toRefs(carState),
      handleChange,
      salecarsubmit,
      ...toRefs(statetime)
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
  color: deeppink;
}
a {
  text-decoration: none;
}
/* .salecar-card {

} */
/* .dialog-footer {
    height: 70px;
    z-index: 999;
  } */
</style>