<template>
  <div>
    <el-scrollbar>
      <div class="flex-content">
        <p class="items" v-for="item in 50">{{ item }}</p>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'MyCar',
    components: {},
    setup() {
      
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