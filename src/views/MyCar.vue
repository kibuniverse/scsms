<template>
<div class="order-wrap">
  <div class="order-title">我的订单</div>
  <div  v-for="(item) in order" :key="item.id">
    <my-order :orderitem="item"></my-order>
  </div>
</div>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { defineComponent, onMounted } from "vue";
import MyOrder from "../components/MyOrder.vue";
import { order } from "../data";
import getOrder from "../api/my-car";

export default defineComponent({
  name: "MyCar",
  components: {
    MyOrder,
  },
  setup() {
    onMounted(() => {
      const userId = window.localStorage.getItem('userId');
      if (!userId) {
        ElMessage.warning('目前还未登陆，请先登录')
        return
      }
      getOrder({ userId: Number(userId) }).then((res: any) => {
        if (res) {
          console.log(res)
        }
      })
    })

    return {
      order,
    }
  }
})
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