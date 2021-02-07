<template>
  <div>
    <el-form
      ref="form"
      :model="editData"
      :inline="form.inline"
      :rules="rules"
      :size="form.size || 'small'"
      :label-width="form.width"
      :disabled="form.disabled || false"
    >
      <el-row
        type="flex"
        :justify="RowData.justify || 'space-around'"
        :align="RowData.align || 'middle'"
        :class="RowData.class"
      >
        <el-col
          v-for="(columns, i) in itemColumns"
          :key="i"
          :span="columns.span"
          :style="columns.itemStyle"
        >
          <el-form-item
            :label="columns.label"
            :prop="columns.prop"
            :required="columns.required"
          >
            <!-- 文本框textarea -->
            <el-input
              v-if="columns.type === 'textarea'"
              :type="columns.type"
              v-model="editData[columns.prop]"
              v-bind="columns.bind"
              :class="columns.class"
              :rows="columns.row || 3"
              :placeholder="columns.placeholder || '请输入'"
              :disabled="columns.disabled || false"
              :clearable="columns.clearable || false"
            ></el-input>
            <!-- radio -->
            <el-radio-group
              v-else-if="columns.type === 'radio'"
              v-model="editData[columns.prop]"
            >
              <el-radio
                v-for="(opt, j) in columns.options"
                :key="j"
                :label="opt.id"
                :disabled="opt.disabled || false"
              >
                {{ opt.name }}
              </el-radio>
            </el-radio-group>
            <!-- 多选框checkbox -->
            <div v-else-if="columns.type == 'checkbox'">
              <el-checkbox
                v-if="columns.isAllCheck"
                :indeterminate="columns.isIndeterminate"
                v-model="columns.checkAll"
                @change="handleCheckAllChange(columns)"
                >全选</el-checkbox
              >
              <el-checkbox-group
                v-model="editData[columns.prop]"
                @change="handleCheckedUserGroupChange(columns)"
              >
                <el-checkbox
                  v-for="(opt, j) in columns.options"
                  :key="j"
                  :label="opt.id"
                  >{{ opt.name }}</el-checkbox
                >
              </el-checkbox-group>
            </div>
            <!-- 下拉框 -->
            <el-select
              v-else-if="columns.type === 'select'"
              :multiple="columns.multiple || false"
              :disabled="columns.disabled || false"
              v-model="editData[columns.prop]"
              v-bind="columns.bind"
              :class="columns.class"
              :placeholder="columns.placeholder || '请选择'"
            >
              <el-option
                v-for="(opt, j) in columns.options"
                :key="j"
                :label="opt.label"
                :value="opt.value"
              />
            </el-select>
            <!-- 日期选择 -->
            <el-date-picker
              v-else-if="columns.type === 'date'"
              v-model="editData[columns.prop]"
              align="right"
              :type="columns.type"
              placeholder="请选择日期"
              value-format="yyyy-MM-dd"
              :clearable="columns.clearable"
              :picker-options="columns.pickerOptions"
            >
            </el-date-picker>

            <el-date-picker
              v-else-if="columns.type === 'daterange'"
              v-model="editData[columns.prop]"
              :type="columns.type"
              align="right"
              unlink-panels
              format="yyyy-MM-dd"
              :class="columns.class"
              :range-separator="columns.range"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="columns.pickerOptions"
              placeholder="请选择"
            >
            </el-date-picker>
            <!-- 日期时间选择器 -->
            <el-date-picker
              v-else-if="columns.type === 'datetimerange'"
              v-model="editData[columns.prop]"
              format="yyyy:MM:dd HH:mm:ss"
              :type="columns.type"
              :range-separator="columns.range"
              :class="columns.class"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              placeholder="请选择"
            >
            </el-date-picker>
            <el-date-picker
              v-else-if="columns.type === 'datetime'"
              v-model="editData[columns.prop]"
              format="yyyy-MM-dd HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss"
              :type="columns.type"
              :class="columns.class"
              placeholder="请选择"
            >
            </el-date-picker>
            <!-- 区域选择 -->
            <area-select
              v-else-if="columns.type === 'area'"
              size="small"
              v-model="editData[columns.prop]"
              :level="columns.level"
              :placeholders="['请选择省份', '请选择城市', '请选择分区']"
              :data="$PCAA"
            ></area-select>
            <!-- 输入框 -->
            <el-input
              v-else
              v-model="editData[columns.prop]"
              v-bind="columns.bind"
              :type="columns.type || 'text'"
              :placeholder="columns.placeholder || '请输入'"
              :disabled="columns.disabled || false"
              :clearable="columns.clearable || false"
              :suffix-icon="columns.icon"
              :prefix-icon="columns.icon"
              :class="columns.class"
              :style="columns.style"
            >
              <el-button
                v-if="columns.append"
                slot="append"
                icon="el-icon-search"
                @click="handleButton(columns.methods)"
              ></el-button>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col
          :span="btnData.span"
          :class="btnData.class"
          :style="btnData.style"
          v-if="btnData.BtndataList"
        >
          <el-form-item v-if="btnData">
            <el-button
              v-for="(item1, index) in btnData.BtndataList"
              :key="index"
              :type="item1.type"
              :icon="item1.icon"
              :class="item1.class || 'w150'"
              :style="item1.style"
              :size="item1.size"
              @click="handleButton(item1.methods)"
            >
              {{ item1.label }}
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default: () => {
        return {};
      }
    },
    rules: {
      type: Object,
      default: () => {
        return {};
      }
    },
    form: {
      type: Object,
      default: () => {
        return {};
      }
    },
    RowData: {
      type: Object,
      default: () => {
        return {};
      }
    },
    itemColumns: {
      type: Array,
      default: () => {
        return [];
      }
    },
    btnData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  watch: {
    formData: {
      handler: function() {
        this.itemColumns.map(column => {
          this.$set(this.editData, column.prop, this.formData[column.prop]);
        });
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      editData: {}
    };
  },
  methods: {
    // 按钮点击事件
    // methods方法名 row当前点击列数据 index当前点击的index
    handleButton(methods) {
      this.$emit("clickButton", { methods: methods, formData: this.editData });
    },
    // 复选框勾选
    handleCheckedUserGroupChange(columns) {
      const checkedCount = this.formData[columns.prop].length;
      columns.checkAll = checkedCount === columns.options.length;
      columns.isIndeterminate =
        checkedCount > 0 && checkedCount < columns.options.length;
    },
    // 复选框全选
    handleCheckAllChange(columns) {
      this.formData[columns.property] = columns.checkAll
        ? columns.options.map(columns => columns.id)
        : [];
      columns.isIndeterminate = false;
    }
  }
};
</script>
<style lang="less" scoped>
::v-deep .el-row {
  flex-wrap: wrap;
}
::v-deep .area-select .area-selected-trigger {
  padding: 0px 20px 0px 12px;
}
// ::v-deep .area-selectable-list-wrap {
//   top: 30px !important;
// }
</style>
