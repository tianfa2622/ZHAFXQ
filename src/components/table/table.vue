<template>
  <div class="table">
    <el-card
      :class="CardAttributes.class"
      :style="CardAttributes.style"
      :body-style="CardAttributes.body"
      :shadow="CardAttributes.shadow"
    >
      <div slot="header" v-if="CardAttributes.title">
        <span>{{ CardAttributes.title }}</span>
      </div>
      <el-table
        ref="table"
        :data="tableData"
        element-loading-text="加载中"
        fit
        border
        :size="size"
        style="width: 100%"
        class="flex1"
        height="100%"
        :header-cell-style="HeaderCellStyle"
        :row-style="RowStyle"
        @sort-change="handleSortChange"
        @row-click="handleRowClick"
      >
        <el-table-column
          type="index"
          width="50"
          label="NO."
          align="center"
        ></el-table-column>
        <el-table-column
          v-for="(item, index) in tableColumns"
          :key="index"
          :prop="item.param"
          :column-key="item.columnKey"
          :width="item.width ? item.width : ''"
          :sortable="item.sortable ? true : false"
          :label="item.label"
          :align="item.align"
          :resizable="false"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span v-if="item.render" :class="item.class(scope.row)">
              {{ item.render(scope.row) }}
            </span>
            <span v-else>{{ scope.row[item.param] }}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="tableOption.label"
          :resizable="false"
          :width="tableOption.width"
          :align="tableOption.align"
          v-if="tableOption.label === '操作'"
        >
          <template slot-scope="scope">
            <el-button
              v-for="(item, index) in tableOption.options"
              :key="index"
              :type="item.type"
              :icon="item.icon"
              :class="item.class"
              :style="item.style"
              :size="item.size"
              :resizable="false"
              @click="handleButton(item.methods, scope.row, scope.$index)"
            >
              {{ item.label }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :background="pagination.isBackC"
        v-if="pagination.isShow === true"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pagination.rows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
        class="posi-abs b-10 ta-c offset"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    // loading: {
    //   // 预加载
    //   type: Boolean,
    //   default: false
    // },
    // title:{
    //   type: String,
    //   default:''
    // },
    HeaderCellStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    RowStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    CardAttributes: {
      type: Object,
      default: () => {
        return {};
      }
    },
    size: {
      // table表格尺寸
      type: String,
      default: ""
    },
    tableData: {
      // 表格数据
      type: Array,
      default: () => {
        return [];
      },
      required: true
    },
    tableColumns: {
      // 表头数据
      type: Array,
      default: () => {
        return [];
      }
    },
    tableOption: {
      // 表格操作
      type: Object,
      default: () => {
        return {};
      }
    },
    // currentPage: {
    //   // 当前页
    //   type: Number,
    //   default: () => {
    //     return 1;
    //   }
    // },
    // rows: {
    //   // 当前页展示数
    //   type: Number,
    //   default: () => {
    //     return 10;
    //   }
    // },
    // total: {
    //   // 总数
    //   type: Number,
    //   default: () => {
    //     return 0;
    //   }
    // },
    pagination: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    // 切换当前一页展示多少条
    handleSizeChange(val) {
      this.$emit("sizeChange", val);
    },
    // 翻页
    handleCurrentChange(val) {
      this.$emit("pageChange", val);
    },
    // 按钮点击事件
    // methods方法名 row当前点击列数据 index当前点击的index
    handleButton(methods, row, index) {
      this.$emit("clickButton", { methods: methods, row: row, index: index });
    },
    // 点击排序
    handleSortChange(val) {
      this.$emit("sortChange", val);
    },
    // 某一行被点击
    handleRowClick(row) {
      this.$emit("click-events", row);
    }
  }
};
</script>

<style lang="less" scoped>
.table {
  width: 100%;
  height: 100%;
}
// ::v-deep .el-card {
//   background-color: rgba(0, 0, 0, 0.1);
//   border: none;
//   .el-card__header {
//     background-color: rgb(0, 51, 102);
//     font-size: 16px;
//     padding: 10px 20px !important;
//     border: none;
//     color: rgb(0, 110, 255);
//   }
//   .el-card__body {
//     background-color: rgb(51, 51, 153);
//     width: 100%;
//     height: calc(100% - 41px);
//   }
// }
</style>
