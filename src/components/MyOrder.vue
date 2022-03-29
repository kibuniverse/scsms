<template>
  <div class="Order_box">
    <div class="Order_top">
      <span>{{ orderItem.brand }}</span>
      <span>{{ orderItem.state }}</span>
    </div>
    <div class="Order_center">
      <span class="Order_left">
        <div class="Order_item1">
          <span class="one">车型信息</span>
          <span class="two">{{ orderItem.model }}</span>
        </div>
        <div class="Order_item2">
          <span class="one">交易时间</span>
          <span class="two">{{ orderItem.tradinghour }}</span>
        </div>
        <div class="Order_item3">
          <span class="one">车辆配置</span>
          <span class="two">{{ orderItem.CarInfo }}</span>
        </div>
      </span>
      <span class="Order_right">
        <img :src="orderItem.picture" alt="" />
      </span>
    </div>
    <div
      style="width: 90%; height: 1px; margin-left: 50px; background: #c0c0c0"
    ></div>
    <div class="Order_footer">
      <span class="Order_price"
        >意向成交价
        <span class="price_fontsize">{{ orderItem.price }}</span>
        万元
      </span>
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "MyCar",
  props: {
    orderitem: {
      type: Object,
    },
  },
  components: {},
  setup(props) {
    const orderItem = props.orderitem;

    return {
      orderItem,
    };
  },
});
</script>

<style>
.Order_box {
  width: 100%;
  height: 400px;
  margin-bottom: 50px;
  /* margin: 0 auto; */
  border: 1px solid white;
  background-color: white;
  /* background-color: rgba(255, 255, 255, 0.486); */
}
.Order_box:hover {
  /* border: 1px solid white; */
  box-shadow: 0 0 10px;
}
.Order_top {
  width: 90%;
  line-height: 60px;
  /* background-color: red; */
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0 3% 0 7%;
}
.Order_center {
  width: 90%;
  height: 210px;
  margin-top: 20px;
  margin-bottom: 30px;
  /*background-color: green;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
}
.Order_left {
  width: 60%;
  height: 100%;
  /*background-color: yellow;*/
}
.Order_item1,
.Order_item2,
.Order_item3 {
  width: 100%;
  height: 70px;
}
.Order_item1 {
  margin-top: 5px;
}
.Order_right {
  width: 40%;
  height: 100%;
  /*background-color: white;*/
}
.one {
  width: 50px;
  line-height: 70px;
  padding-left: 20px;
  /*background-color: skyblue;*/
}
.two {
  width: 200px;
  line-height: 70px;
  padding-left: 30px;
  /*background-color: blue;*/
  /*padding-left: 10%;*/
}
img {
  width: 320px;
  height: 210px;
  padding-left: 30px;
}
.Order_footer {
  width: 90%;
  line-height: 80px;
  /* background-color: blue; */
}
.Order_price {
  margin: 0 7.5%;
}
.price_fontsize {
  font-size: 20px;
}
</style>
