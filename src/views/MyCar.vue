<template>
  <div class="order-wrap">
    <div class="order-title">我的订单</div>
    <div v-for="item in arr" :key="item.id">
      <my-order :orderitem="item"></my-order>
    </div>
  </div>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { defineComponent, onBeforeMount, ref } from "vue";
import MyOrder from "../components/MyOrder.vue";
import getOrder from "../api/my-car";
import { OrderList } from "../typings";

export default defineComponent({
  name: "MyCar",
  components: {
    MyOrder,
  },
  setup() {
    const arr = ref([]);

    function getOrderFn() {
      const userId = window.sessionStorage.getItem("userId");
      if (!userId) {
        ElMessage({
          showClose: true,
          type: "warning",
          message: "目前还未登陆，请先登录",
          duration: 2000,
        });
        const arrs = [];
        getOrder({ userId: Number(userId) }).then((res: any) => {
          if (res) {
            for (let i = 0; i < res.saleOrder.length; i++) {
              const data: OrderList = {
                model: "",
                tradinghour: "",
                CarInfo: "",
                price: 0,
                id: 0,
                brand: "",
                picture: "",
              };
              let date = rTime(res.saleOrder[i].saleCar.createTime);
              function rTime(date) {
                var json_date = new Date(date).toJSON();
                return new Date(new Date(json_date) + 8 * 3600 * 1000)
                  .toISOString()
                  .replace(/T/g, " ")
                  .replace(/\.[\d]{3}Z/, "");
              }
              data.brand = res.saleOrder[i].saleCar.car.brand;
              data.picture = res.saleOrder[i].saleCar.car.cxLogo;
              //console.log(data.picture);
              data.id = res.saleOrder[i].id;
              data.tradinghour = date;
              data.price = res.saleOrder[i].saleCar.price;
              data.model = res.saleOrder[i].saleCar.car.model;
              data.CarInfo = `${res.saleOrder[i].saleCar.car.series} | ${res.saleOrder[i].saleCar.car.structure}`;
              arrs.push(data);
            }
            arr.value = arrs;
          }
        })
        return;
      } else {
        const arrs = [];
        getOrder({ userId: Number(userId) }).then((res: any) => {
          console.log(res)
          if (res) {
            for (let i = 0; i < res.saleOrder.length; i++) {
              const data: OrderList = {
                model: "",
                tradinghour: "",
                CarInfo: "",
                price: 0,
                id: 0,
                brand: "",
                picture: "",
              };
              let date = rTime(res.saleOrder[i].saleCar.createTime);
              function rTime(date) {
                var json_date = new Date(date).toJSON();
                return new Date(new Date(json_date) + 8 * 3600 * 1000)
                  .toISOString()
                  .replace(/T/g, " ")
                  .replace(/\.[\d]{3}Z/, "");
              }
              data.brand = res.saleOrder[i].saleCar.car.brand;
              data.picture = res.saleOrder[i].saleCar.car.cxLogo;
              //console.log(data.picture);
              data.id = res.saleOrder[i].id;
              data.tradinghour = date;
              data.price = res.saleOrder[i].saleCar.price;
              data.model = res.saleOrder[i].saleCar.car.model;
              data.CarInfo = `${res.saleOrder[i].saleCar.car.series} | ${res.saleOrder[i].saleCar.car.structure}`;
              arrs.push(data);
            }
            arr.value = arrs;
          }
          console.log(res);
        });
      }
    }
    onBeforeMount(() => {
      getOrderFn();
    });
    return {
      arr,
    };
  },
});
</script>

<style scoped>
.order-wrap {
  width: 70%;
  margin-left: 15%;
}
.order-title {
  width: 100%;
  height: 150px;
  line-height: 150px;
  font-size: 35px;
}
</style>
