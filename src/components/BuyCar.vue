<template>
  <div class="main">
    <div class="search">
      <el-input
        class="title-search title-item"
        placeholder="请输入关键词，例如: 奥迪"
        prefix-icon="el-icon-search"
        v-model="searchValue"
      >
      </el-input>
      <el-button type="success" class="title-button">搜索</el-button>
    </div>
    <div class="car-category" >
      <div class="title">
        <span class="sign public">品牌</span>
        <span class="public" v-for="(item, index) in cBrands" :key="index" @click="searchCar(1,item)">{{item}}</span>
      </div>
      <div class="car-series title">
        <span class="sign public">车系</span>
        <span class="public" v-for="(item, index) in cSeries" :key="index" @click="searchCar(1, '', item)">{{item}}</span>
      </div>
    </div>
    <div class="not-data" v-if="isCar === false">Not Data!</div>
    <div class="car-list" v-if="isCar === true">
      <div class="one-car" v-for="(item, index) in AllCarInfo" :key="index">
        <img src="../static/car.jpg" class="image" alt="" >
        <div class="info-head">
          <span class="ellipsis">{{ item.model }}</span>
        </div>
        <div class="info-middle">
          <span>{{ item.year }}</span>
          <span>{{ item.Kilometer }}</span>
        </div>
        <div class="info-foot">
          {{ item.price }}
        </div>
      </div>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="20"
          :pager-count="5"
          :page-count="pageCount.pagenumber"
          @current-change="pageChage"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, onMounted } from 'vue'
  import { carData, carInfo } from '../data/index.ts'
  import { getInfo, getCarInfo } from '../api/buy-car/index.ts'

  export default defineComponent({
    name: 'BuyCar',
    components: {},
    setup() {
      onMounted(() => {
        getInfoFn()
        searchCar(1)
      })

    const searchValue = ref("");
    const activeNames = ref(["1"]);
    const handleChange = (val) => {
      console.log(val);
    };

    const cSeries = ref([]);
    const cBrands = ref([]);

    /**
     * @description: 获取品牌和车系
     * @param {*}
     * @return {*}
     */
    function getInfoFn() {
      getInfo().then((res) => {
        cSeries.value = res.brands;
        cBrands.value = res.series;
      });
    }

      const pageCount = reactive({
        pagenumber:  null // 页数
      })

      /**
       * @description: 翻页
       * @param {*} page
       * @return {*}
       */      
      function pageChage  (page) {
        searchCar(page)
      }

      const AllCarInfo = ref([])
      const isCar = ref(true)
      /**
       * @description: 搜索车信息
       * @param {*} page
       * @param {*} brand
       * @param {*} series
       * @return {*}
       */      
      function searchCar (page=1, brand='', series='') {
        let carInfo = {
          page,
          brand,
          series,
        }
        getCarInfo(carInfo).then(res => {
          if (res.size === 0) {
            isCar.value = false
          } else if (res.size > 0) {
            isCar.value = true
            AllCarInfo.value = []
            const arr = res.list
            for (let i = 0; i < arr.length; i++) {
              const oneCarInfo = {
                model: '',
                year: '',
                Kilometer: '',
                price: '',
              }
              oneCarInfo.model = arr[i].car.model
              oneCarInfo.year = arr[i].buyTime.split("-")[0] + '年'
              oneCarInfo.Kilometer = arr[i].km + '万公里'
              oneCarInfo.price = arr[i].price + '元'
              AllCarInfo.value.push(oneCarInfo)
            }
            pageCount.pagenumber = res.pages
          }
        })
      }

      return {
        cSeries,
        cBrands,
        isCar,
        AllCarInfo,
        pageCount,
        pageChage,
        searchValue,
        activeNames,
        handleChange,
        searchCar,
      }
    }
  })
</script>

<style>
  .main {
    width: 100%;
    justify-content: center;
    align-items: center;
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
    text-align: center;
    color: #303133;
  }
  .public:hover {
    color: seagreen;
    cursor: pointer;
  }
  .car-series {
    height: 49px;
    border-bottom: 1px solid  rgb(240, 240, 240);
  }
  .car-list {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .one-car {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 23%;
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
  .info-head .ellipsis {
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    padding-bottom: 20px;
  }
  .not-data {
    width: 100%;
    height: 300px;
    line-height: 300px;
    text-align: center;
  }
</style>