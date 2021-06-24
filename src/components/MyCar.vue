<template>
  <div>
    <el-scrollbar>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import { getOrder } from '../api/my-car'
  import { ElMessage } from 'element-plus'
  export default defineComponent({
    name: 'MyCar',
    components: {},
    setup() {
      onMounted(() => {
        const userId = window.localStorage.getItem('userId');
        if (!userId) {
          ElMessage.warning('目前还未登陆，请先登录')
          return
        }
        getOrder({ userId: Number(userId) }).then(res => {
          if (res) {
            console.log(res)
          }
        })
      })
    }
  })
</script>

<style>
  .flex-content {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex-content .items {
    
    height: 50px;
    line-height: 50px;
  }
</style>