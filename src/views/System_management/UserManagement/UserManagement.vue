/* eslint-disable no-unused-vars */
<template>
  <div class="h-100 w-100 bgc dflex direction-column">
    <div class="felx1">
      <el-breadcrumb separator=">>">
        <!-- :to="{ path: '/UserManagement' }" -->
        <el-breadcrumb-item> 系统管理 </el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="card_style" body-style="padding-bottom: 0px;">
        <Myform
          :formData="MyformData.formData"
          :form="MyformData.form"
          :itemColumns="MyformData.itemColumns"
          :btnData="MyformData.btnData"
          @clickButton="clickButton"
        ></Myform>
      </el-card>
    </div>
    <div class="vehicle_bottom dflex">
      <!-- <div class="h-100 w-69"> -->
      <Mytable
        :size="MyTableData.size"
        :tableData="MyTableData.tableData"
        :tableColumns="MyTableData.tableColumns"
        :tableOption="MyTableData.tableOption"
        :HeaderCellStyle="MyTableData.HeaderCellStyle"
        @sizeChange="sizeChange"
        @pageChange="pageChange"
        @clickButton="clickButton"
        :CardAttributes="MyTableData.CardAttributes"
        :pagination="MyTableData.pagination"
      ></Mytable>
      <!-- </div> -->
    </div>
    <Editor
      :type="editorType"
      :visible.sync="editorVisible"
      :fields="fields"
      @confirm="confirm"
      :labelWidth="labelWidth"
    />
    <!-- :width="width" -->
    <!-- 权限设置 -->
    <el-dialog
      title="权限设置"
      :visible.sync="AuthorityDialogVisible"
      width="30%"
      custom-class="dialog_class"
    >
      <!-- :before-close="handleClose" -->
      <el-collapse v-model="activeNames" @change="handleChange">
        <template v-for="items in collapse">
          <el-collapse-item
            :title="items.title"
            :name="items.id"
            :key="items.id"
          >
            <template v-for="item in items.Authority">
              <el-row
                :key="item.id"
                type="flex"
                class="Authority_Row"
                justify="space-between"
              >
                <el-col :span="6">
                  <span class="Authority_span">{{ item.title }}</span>
                </el-col>
                <el-col :span="3">
                  <el-checkbox v-model="item.checked"></el-checkbox>
                </el-col>
              </el-row>
            </template>
          </el-collapse-item>
        </template>
      </el-collapse>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          size="mini"
          @click="AuthorityDialogVisible = false"
          class="w100"
        >
          保 存
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import MyformData from "./UserManagementform/UserManagementform";
import MyTableData from "./UserManagementtable/UserManagementtable";
import fields from "./editor";
export default {
  data() {
    return {
      collapse: [
        {
          id: 1,
          title: "社区权限",
          Authority: [
            {
              id: 1,
              title: "荷花园社区",
              checked: true
            },
            {
              id: 2,
              title: "马王堆社区",
              checked: true
            }
          ]
        },
        {
          id: 2,
          title: "功能权限",
          Authority: [
            {
              id: 1,
              title: "实时监控",
              checked: false
            },
            {
              id: 2,
              title: "历史监控",
              checked: false
            },
            {
              id: 3,
              title: "综合数据管理",
              checked: false
            },
            {
              id: 4,
              title: "人员管理",
              checked: false
            },
            {
              id: 5,
              title: "车辆管理",
              checked: false
            },
            {
              id: 6,
              title: "房屋管理",
              checked: false
            }
          ]
        }
      ],
      MyformData,
      MyTableData,
      fields,
      editorType: "add",
      editorVisible: false,
      // width: "30%",
      labelWidth: "160px",
      AuthorityDialogVisible: false,
      activeNames: [1, 2]
    };
  },
  methods: {
    // 点击事件
    clickButton(val) {
      // 调用事件
      // this[val.methods](val.row);
      if (val.methods === "Increase") {
        this.openEditor(val.methods, val.row);
      } else {
        this[val.methods](val.row);
      }
    },
    openEditor(type, row) {
      console.log(type, row);
      switch (type) {
        case "Increase":
          this.editorType = "add";
          break;
      }
      this.editorVisible = true;
    },
    confirm(formData) {
      console.log(formData);
      // 请求接口提交数据 等等
      this.editorVisible = false;
    },
    // 切换当前一页展示多少条
    sizeChange(val) {
      this.rows = val;
    },
    // 翻页
    pageChange(val) {
      this.page = val;
    },
    // eslint-disable-next-line no-unused-vars
    Authority(val) {
      // 我是权限
      this.AuthorityDialogVisible = true;
    },
    handleChange(val) {
      console.log(val);
    },
    // eslint-disable-next-line no-unused-vars
    Disable(val) {
      // 我是禁用
      let mystatus;
      if (val.status === "禁用") {
        mystatus = val.status;
      } else {
        mystatus = "解禁";
      }
      this.$confirm(`确定${mystatus}该用户?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: `${mystatus}成功!`
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: `已取消${mystatus}`
          });
        });
    },
    search() {}
  }
};
</script>

<style lang="less" scoped>
.bgc {
  background-color: #fff;
  .vehicle_bottom {
    width: 100%;
    height: calc(100% - 168px);
    margin-top: 10px;
    .w-69 {
      width: 69%;
    }
    .w-1 {
      width: 1%;
    }
  }
}
::v-deep .el-breadcrumb__item {
  margin: 10px 0px 10px 10px;
  span {
    color: #ff6600 !important;
  }
}
.card_style {
  overflow: visible !important;
}
::v-deep .dialog_class {
  .el-dialog__body {
    padding: 0px !important;
    .el-collapse-item__header {
      background-color: #f2f2f2;
      font-size: 14px;
      padding-left: 25px;
      padding-right: 25px;
    }
    .el-collapse-item__content {
      padding: 0 30px;
      .Authority_Row {
        padding: 6px 0;
        border-bottom: 1px solid #ccc;
      }
      .Authority_Row:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
