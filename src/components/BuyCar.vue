<template>
  <div class="main">
    <div class="search">
      <el-input
        class="title-search title-item"
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
        v-model="searchValue"
      >
      </el-input>
      <el-button type="success" class="title-button">搜索</el-button>
    </div>
    <div class="car-category">
      <div class="title">
        <span class="sign public">品牌</span>
        <span class="public" v-for="(item, index) in cBrands" :key="index">{{item}}</span>
      </div>
      <div class="car-series title">
        <span class="sign public">车系</span>
        <span class="public" v-for="(item, index) in cSeries" :key="index">{{item}}</span>
      </div>
    </div>
    <div class="car-list">
      <div class="one-car" v-for="(item, index) in carInfo" :key="index">
        <img src="../static/1.jpg" class="image" alt="" >
        <div class="info-head">
          <span>{{item.series}}</span>
          <span>{{item.model}}</span>
          <span>{{item.displacement}}</span>
          <span>{{item.style}}</span>
        </div>
        <div class="info-middle">
          <span>{{item.year}}</span>
          <span>{{item.Kilometer}}</span>
        </div>
        <div class="info-foot">
          {{item.price}}
        </div>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="20"
      :pager-count="7"
      :page-count="20"
      @current-change="pageChage"
      class="page"
    >
    <!-- :page-count="pageCount.pagenumber" -->
    </el-pagination>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, onMounted } from 'vue'
  import { carData, carInfo } from '../data/index.ts'
  import { getInfo, getCarInfo } from '../api/car/index.ts'

  export default defineComponent({
    name: 'BuyCar',
    components: {},
    setup() {
      onMounted(() => {
        getInfoFn()
        getCarInfoFn(1)
      })

      const searchValue = ref('')
      const activeNames = ref(['1'])
      const handleChange = (val) => {
        console.log(val)
      }

      function getInfoFn () {
        getInfo().then(res => {
          cSeries.value = res.data.data.brands
          cBrands.value = res.data.data.series
        })
      }

      function getCarInfoFn (page) {
        getCarInfo(page).then(res => {
          console.log(res)
        })
      }

      const pageCount = reactive({
        pagenumber:  null // 页数
      })

      // function getTableData(page) {
      //   allCar(page).then(res => {
      //     // 改变 tableData的值时 要加上.value属性
      //     pageCount.pagenumber = res.msg.pageNums
      //   })
      // }
      function pageChage(page) {
        // getTableData(page)
      }

      const cSeries = ref([])
      const cBrands = ref([])
      return {
        cSeries,
        cBrands,
        carInfo,
        pageCount,
        pageChage,
        searchValue,
        activeNames,
        handleChange,
      }
    }
  })
</script>

<style>
  .main {
    width: 100%;
  }
  .search {
    width: 100%;
    height: 40px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title-search {
    width: 50%;
    margin-right: 10px;
  }
  .car-category {
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;
  }
  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid  rgb(240, 240, 240);
  }
  .car-series .title {
    border-top: none;
    height: 100%;
  }
  .sign {
    background-color: rgb(240, 240, 240);
  }
  .car-series .sign {
    height: 100%;
    line-height: 49px;
  }
  .public {
    width: 100px;
    height: 49px;
    line-height: 49px;
    font-size: 13px;
    color: #303133;
  }
  .public:hover {
    color: seagreen;
  }
  .car-series {
    height: 49px;
    border-bottom: 1px solid  rgb(240, 240, 240);
  }
  .car-list {
    width: 100%;
    height: 100%;
    margin-left: 1.8%;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .one-car {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 285px;
    height: 287px;
    padding: 9px;
    border: 1px solid #ffffff;
    transition: all 0.5s;
  }
  .one-car:hover {
    box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.1);
  }
  .one-car .image {
    width: 285px;
    height: 192px;
    padding: 1px;
  }
  .info-head {
    width: 283px;
    height: 25.333px;
    line-height: 25.333px;
    padding: 1px 0 6px 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .info-head span {
    margin-right: 5px;
    font-size: 17px;
    color: #495056;
  }
  .info-middle {
    width: 283px;
    height: 20.667px;
    line-height: 20.667px;
    padding: 0 0 2px 4px;
    color: #A5ABB2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .info-middle span {
    margin-right: 5px;
    font-size: 14px;
    color: #A5ABB2;
  }
  .info-foot {
    width: 283px;
    height: 30px;
    line-height: 30px;
    padding-left: 4px;
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    color: #F95523;
  }
  .page {
    height: 30px;
    line-height: 30px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>