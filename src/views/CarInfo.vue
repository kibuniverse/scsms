<template>
  <div class="carInfo">
    <div class="left">
      <div
        class="top"
        :style="{ backgroundImage: 'url(' + images[showIndex].url + ')' }"
      ></div>
      <div class="bottom">
        <img
          v-for="(item, index) in images"
          :key="item"
          :src="item.url"
          alt=""
          :class="{ noActive: showIndex !== index }"
          @click="changeIndex(index)"
        />
      </div>
    </div>
    <div class="right">
      <h1>{{ carInfo.name }}</h1>
      <div class="info">
        <div class="wrapper item1">
          <span>{{ carInfo.registerTime }}</span>
          <span>上牌时间 </span>
        </div>
        <span>|</span>
        <div class="wrapper item2">
          <span>{{ carInfo.drivingMileage }}</span>
          <span>表显里程</span>
        </div>
        <span>|</span>
        <div class="wrapper item3">
          <span>{{ carInfo.displacement }}</span>
          <span>排量</span>
        </div>
        <span>|</span>
        <div class="wrapper item4">
          <span>{{ carInfo.transmissionCase }}</span>
          <span>变速箱</span>
        </div>
      </div>
      <h5>全款价</h5>
      <h2 style="font-size: 30px; margin-top: 20px">{{ carInfo.money }}</h2>
      <div class="msg1"></div>
      <div class="msg2"></div>
      <div class="btns">
        <button class="btn btn1" @click="appiontmentEvent">我要预约</button>
        <button class="btn btn2" @click="bargainEvent">我要砍价</button>
        <button class="btn btn3" @click="consultEvent">免费咨询</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingleCarInfo } from "../api/buy-car/index.ts";
export default {
  name: "carInfo",
  data() {
    return {
      showIndex: 0,
      images: [
        {
          url: "/src/assets/m1.jpg",
        },
        {
          url: "/src/assets/m2.jpg",
        },
        {
          url: "/src/assets/m3.jpg",
        },
        {
          url: "/src/assets/m4.jpg",
        },
        {
          url: "/src/assets/m1.jpg",
        },
        {
          url: "/src/assets/m2.jpg",
        },
        {
          url: "/src/assets/m3.jpg",
        },
      ],
      carInfo: {
        name: "奔驰C级 2016款 C 180 L 运动型",
        registerTime: "20l6-06",
        drivingMileage: "5.08万公里",
        displacement: "1.6T",
        transmissionCase: "自动",
        money: "21.30万",
      },
    };
  },
  created() {
    let id = this.$route.params.id;
    getSingleCarInfo(id).then((res) => {
      console.log(res);
      this.carInfo.money = res.price;
      this.carInfo.name = res.car.model;
      this.carInfo.registerTime = res.buyTime.split("T")[0];
      this.carInfo.drivingMileage = res.km + "万公里";
    });
  },
  methods: {
    changeIndex(index) {
      this.showIndex = index;
    },
    appiontmentEvent() {
      console.log("我要预约");
    },
    bargainEvent() {
      console.log("我要砍价");
    },
    consultEvent() {
      console.log("免费咨询");
    },
  },
};
</script>

<style scoped>
.carInfo {
  background: #fff;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}
.carInfo .left {
  width: 42%;
  height: 680px;
}
.carInfo .right {
  width: 42%;
  height: 680px;
}
.carInfo .left .top {
  width: 100%;
  height: 80%;
  background-size: 100% 100%;
  margin-bottom: 20px;
}
.carInfo .left .bottom {
  display: flex;
  overflow: scroll;
}
.noActive {
  opacity: 0.6;
}
.bottom img {
  width: 20%;
  height: 100px;
}
.right {
  line-height: 1;
}
.right h1,
h2,
h5 {
  text-align: left;
}
.right .info {
  display: flex;
  justify-content: space-around;
  margin: 50px 0;
}
.right .info .wrapper {
  display: flex;
  flex-direction: column;
  color: #a5abb2;
  line-height: 24px;
  font-size: 20px;
}
.msg1 {
  width: 700px;
  height: 150px;
  margin: 20px 0;
  background-image: url("../assets/msg2.png");
  background-repeat: no-repeat;
}
.msg2 {
  width: 700px;
  height: 150px;
  margin: 20px 0;
  background-image: url("../assets/msg1.png");
  background-repeat: no-repeat;
}
.btns {
  display: flex;
  justify-content: space-between;

  font-weight: bolder;
}
.btn {
  color: #fff;
  font-size: 20px;
  width: 33%;
  height: 55px;
  border: none;
}
.btn.btn1 {
  background-color: #fd6c34;
}
.btn.btn2 {
  background-color: #2abd53;
}
.btn.btn3 {
  color: #2abd53;
  background-color: #f6fcf7;
  border: 1px solid #2abd53;
}
</style>