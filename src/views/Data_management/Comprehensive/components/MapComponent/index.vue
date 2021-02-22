<template>
  <div class="h-100 w-100">
    <el-card class="card_style" body-style="padding-bottom: 0px;">
      <Myform
        :formData="paramsData"
        :form="MyformData.form"
        :itemColumns="MyformData.itemColumns"
        :RowData="{ justify: 'start' }"
        @clickButton="FormclickButton"
      ></Myform>
    </el-card>
    <div class="map_Content dflex">
      <div class="w-70 h-100">
        <baidu-map
          class="map"
          :scroll-wheel-zoom="true"
          :center="center"
          :zoom="zoom"
          mapType="BMAP_SATELLITE_MAP"
        >
          <!-- :icon="{
              url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif',
              size: { width: 300, height: 157 }
            }" -->
          <template>
            <bm-marker
              v-for="(item, index) in mapData"
              :key="index"
              :position="item.markerPoint"
              :title="item.jlxxqmc"
              @click="look(item)"
            >
              <bm-info-window
                :position="item.markerPoint"
                :show="item.showFlag"
                @close="infoWindowClose(item)"
                @open="infoWindowOpen(item)"
              >
                <div>
                  <div>
                    <el-form label-width="120px" size="mini" :model="from">
                      <el-form-item label="小区名称：">
                        {{ from.jlxxqmc }}
                      </el-form-item>
                      <el-form-item label="小区楼栋数：">
                        <span>{{ from.xqldSl }}</span>
                      </el-form-item>
                      <el-form-item label="小区出入口数：">
                        <span>{{ from.xqcrkSl }}</span>
                      </el-form-item>
                      <el-form-item label="物业公司名称：">
                        <span>{{ from.wygs }}</span>
                      </el-form-item>
                      <el-form-item label="地址：">
                        <span>{{ from.dzmc }}</span>
                      </el-form-item>
                    </el-form>
                  </div>
                  <div class="mt-5">
                    <el-button
                      type="primary"
                      size="mini"
                      @click="changePage('2')"
                    >
                      访客记录
                    </el-button>
                    <el-button type="primary" size="mini" @click="openEditor">
                      物业信息
                    </el-button>
                    <el-button
                      type="primary"
                      size="mini"
                      @click="changePage('3')"
                    >
                      停车场概况
                    </el-button>
                    <el-button
                      type="primary"
                      size="mini"
                      @click="changePage('5')"
                    >
                      小区信息
                    </el-button>
                    <el-button
                      type="primary"
                      size="mini"
                      @click="changePage('6')"
                    >
                      门禁信息
                    </el-button>
                  </div>
                </div>
              </bm-info-window>
            </bm-marker>
          </template>
        </baidu-map>
      </div>
      <div class="w-1 h-100"></div>
      <div class="w-29 h-100">
        <el-card
          class="w-100 h-100"
          :body-style="{ padding: '0px', height: 'calc(100% - 53px)' }"
        >
          <div slot="header">
            <span>小区人口</span>
          </div>
          <MyEcharts :option="options1"></MyEcharts>
        </el-card>
      </div>
    </div>

    <Editor
      :title="title"
      :type="editorType"
      :visible.sync="editorVisible"
      v-if="editorVisible"
      :fields="fields"
      :width="width"
      :editData="editData"
      :labelWidth="labelWidth"
    />
    <!-- @confirm="confirm" -->
  </div>
  <!-- @moving="syncCenterAndZoom"
        @moveend="syncCenterAndZoom"
        @zoomend="syncCenterAndZoom" -->
</template>

<script>
import {
  getSelectAll,
  getSelectOne
} from '@/api/Data_management/index/map/index'
import MyformData from './Mapform'
import options1 from './Community.js'
import fields from './editor'
// import options from "../../../../VideoMonitoring/Real-time/RealTimeForm/RealTimeForm";

export default {
  name: 'MapComponent',
  props: {
    currentPage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      MyformData,
      options1,
      // center: {
      //   lng: 116.404,
      //   lat: 39.915
      // },
      // zoom: 15,
      center: {
        lng: 1,
        lat: 2
      },
      zoom: 5,
      // markerPoint:{
      //   lng:116.404,
      //   lat:39.915
      // },
      from: {},
      position: {},
      fields,
      editorType: 'view',
      editorVisible: false,
      editData: {},
      width: '50%',
      labelWidth: '180px',
      paramsData: {
        area: [],
        jlxxqmc: ''
      },
      mapData: [],
      title: '物业信息'
    }
  },
  created() {
    this.getSelectInfo()
  },
  methods: {
    getSelectInfo() {
      getSelectAll({
        ...this.paramsData
      }).then(res => {
        console.log(res)
        if (res.code === 1) {
          this.mapData = res.data.records
          for (const key in this.mapData) {
            this.mapData[key].showFlag = false
            this.mapData[key].markerPoint = {
              lng: this.mapData[key].dqjd,
              lat: this.mapData[key].dqwd
            }
          }
          Object.assign(this.$data.paramsData, this.$options.data().paramsData)
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    getSelectInfoOne(row) {
      getSelectOne(row.xqxxbz).then(res => {
        if (res.code === 1) {
          console.log(res)
          this.editData = res.data
          this.editorVisible = true
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    // 点击事件
    infoWindowClose(item) {
      item.showFlag = false
    },
    infoWindowOpen(item) {
      item.showFlag = true
    },
    look(items) {
      this.from = items
      this.position = items.markerPoint
      items.showFlag = true
    },
    FormclickButton(val) {
      // 调用事件
      this[val.methods](val.row)
    },
    openEditor(row) {
      this.getSelectInfoOne(row)
    },
    // confirm(formData) {
    //   console.log(formData);
    //   // 请求接口提交数据 等等
    //   this.editorVisible = false;
    // },
    search(v) {
      this.paramsData = { ...v }
      this.getSelectInfo()
    },
    // 跳转页面
    changePage(target) {
      // 更新父组件传入的prop ‘currentPage’
      this.$emit('update:currentPage', target)
    }
  }
}
</script>

.<style lang="less" scoped>
.card_style {
  overflow: visible;
}
.w-29 {
  width: 29%;
}
.w-1 {
  width: 1%;
}
.map_Content {
  width: 100%;
  height: calc(100% - 72px);
}
.map {
  width: 100%;
  height: 100%;
}
::v-deep .el-form-item--mini.el-form-item {
  margin-bottom: 10px;
}
</style>
