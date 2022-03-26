<template>
  <div >
    <div class="top-wrap">
      <div>
        <span>{{orderItem.name}}</span>
        <span>{{orderItem.state}}</span>
      </div>
      <div>

      </div>
    </div>
    <div class="up-wrap"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'

  export default defineComponent({
    name: 'MyCar',
    props: {
      orderitem: {
        type: Object
      }
    },
    components: {},
    setup(props) {
      const orderItem = props.orderitem
      return {
        orderItem
      }
    }
  })
</script>

<style>
  
</style>