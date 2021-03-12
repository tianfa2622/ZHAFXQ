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
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <template v-for=" (marker,index) in mapData" >
              <!-- 标记点组件 -->
              <bm-marker :position="{ lng: marker.dqjd, lat: marker.dqwd }" :key="marker.id" :title="marker.jlxxqmc" :dragging="true" @click="infoWindowOpen(marker)">
                <!-- 信息窗体组件 -->
                <bm-info-window
                  autoPan
                  :show="marker.show"
                  :title="title"
                  :closeOnClick="false"
                  :position="{lng: marker.dqjd , lat: marker.dqwd}"
                  :offset="{width:5,height:-5}"
                  @close="infoWindowClose(marker)"
                  @open="infoWindowOpen(marker)"
                  >
                    <div>
                      <!-- <div> -->
                        <el-form label-width="120px" size="mini" :model="marker">
                          <el-form-item label="小区名称：">
                            {{ marker.jlxxqmc }}
                          </el-form-item>
                          <el-form-item label="小区楼栋数：">
                            <span>{{ marker.xqldSl }}</span>
                          </el-form-item>
                          <el-form-item label="小区出入口数：">
                            <span>{{ marker.xqcrkSl }}</span>
                          </el-form-item>
                          <el-form-item label="物业公司名称：">
                            <span>{{ marker.wygs }}</span>
                          </el-form-item>
                          <el-form-item label="地址：">
                            <span>{{ marker.dzmc }}</span>
                          </el-form-item>
                        </el-form>
                      <!-- </div> -->
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
                <!-- 标签组件 -->
                <bm-label
                    :content="index + 1 + ''"
                    :labelStyle="{
                      color: '#fff',
                      fontSize: '12px',
                      background: 'rgba(0, 0, 0, 0)',
                      borderColor: 'rgba(0, 0, 0, 0)',
                    }"
                    :offset="{ width: index >= 9 ? 0 : 4, height: 2 }"
                />
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
</template>

<script>
import {
  getSelectAll,
  getSelectOne
} from '@/api/Data_management/index/map/index'
import MyformData from './Mapform'
import options1 from './Community.js'
import fields from './editor'

export default {
  name: 'MapComponent',
  props: {
    currentPage: {
      type: String,
      required: true
    }
  },
  components: {
  },
  data() {
    return {
      MyformData,
      options1,
      show: false,
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
      title: '物业信息',
      infoWindow: {}
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
        if (res.code === 1) {
          this.mapData = res.data.records
          for (let i = 0; i < this.mapData.length; i++) {
            this.$set(this.mapData[i], 'show', false)
            this.$set(this.mapData[i], 'id', i)
          }
          Object.assign(this.$data.paramsData, this.$options.data().paramsData)
          this.$message.success(res.message)
        } else {
          this.$message.error('查询成功')
        }
      })
    },
    getSelectInfoOne(row) {
      getSelectOne(row.xqxxbz).then(res => {
        if (res.code === 1) {
          this.editData = res.data
          this.editorVisible = true
          this.$message.success(res.message)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    // lookDetail(marker) {
    //   console.log(1)
    //   marker.show = !marker.show
    //   console.log(marker.show)
    // },
    // 关闭标记详情
    infoWindowClose(marker) {
      marker.show = false
      console.log('🚀 ~ file: index.vue ~ line 225 ~ marker.show', marker.show)
    },
    // 打开标记详情
    infoWindowOpen(marker) {
      marker.show = true
      console.log('🚀 ~ file: index.vue ~ line 230 ~ marker.show', marker.show)
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
