<template>
  <el-form
    ref="form"
    size="mini"
    :model="formData"
    :disabled="disabled"
    :inline="inline || true"
    :label-width="labelWidth || '100px'"
    :rules="formRules"
  >
    <el-row type="flex" justify="center">
      <!-- v-for 与 v-if 不可同时使用，所以使用不会渲染的template标签进行循环，再在el-form-item里面判断 -->
      <template v-for="field in fields">
        <el-col :span="field.span || 12" :key="field.field">
          <!-- 如果field中存在hidden字段，并且hidden中包含type会返回true，会显示这个字段，所以使用感叹号反向，让他不显示 -->
          <el-form-item
            v-if="!(field.hidden && field.hidden.includes(type))"
            :label="field.label"
            :prop="field.field"
            :style="field.formItemStyle"
            :label-width="field.label ? labelWidth : '0px'"
          >
            <el-avatar
              v-if="field.type === 'avatar'"
              shape="square"
              :style="field.style || ''"
              :size="100"
              :src="formData[field.field]"
            >
              <img
                src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
              />
            </el-avatar>
            <div class="block" v-else-if="field.type === 'image'">
              <el-image
                :lazy="true"
                :style="field.style || ''"
                :src="
                  formData[field.field] ||
                  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
                "
                fit="fill"
              ></el-image>
              <p class="demonstration">{{ field.title }}</p>
            </div>
            <el-popover
              v-else-if="field.type === 'popover'"
              placement="right"
              width="400"
              trigger="click"
            >
              <el-image
                :lazy="true"
                fit="fill"
                :src="
                  formData[field.field] ||
                  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
                "
              ></el-image>
              <el-button type="text" slot="reference">查看图片</el-button>
            </el-popover>
            <el-input
              v-else-if="field.type === 'input'"
              v-model="formData[field.field]"
              :disabled="field.disabled || false"
              :style="field.style || ''"
              @input="
                field.dataType === 'number' &&
                  valueToNumber(field.field, $event)
              "
            />
            <el-select
              v-else-if="field.type === 'select'"
              v-model="formData[field.field]"
              :style="field.style || ''"
              class="w-100"
            >
              <el-option
                v-for="option in field.options"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
            <el-input
              v-else-if="field.type === 'textarea'"
              type="textarea"
              :style="field.style || ''"
              :rows="4"
              v-model="formData[field.field]"
              resize="none"
            >
            </el-input>
            <el-date-picker
              v-else-if="field.type === 'datetime'"
              v-model="formData[field.field]"
              :style="field.style || ''"
              type="datetime"
              placeholder="选择日期时间"
              :value-format="field.valueFormat"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean
    },
    type: {
      type: String
    },
    fields: {
      type: Array,
      required: true
    },
    labelWidth: {
      type: String
    },
    inline: {
      type: Boolean
    },
    editData: {
      type: Object
    }
  },
  data() {
    return {
      formData: {},
      formRules: {}
    };
  },
  created() {
    this.fields.map(field => {
      if (field.hidden && field.hidden.includes(this.type)) {
        return;
      }
      const rules = [];
      if (field.required) {
        rules.push({
          required: true,
          trigger:
            field.validateTrigger || field.type === "select"
              ? "change"
              : "blur",
          message: `请${this.getMethod(field.type)}${field.label}`
        });
      }
      if (this.type === "add") {
        // for (const key in this.editData) {
        // this.$set(this.formData, key, "");
        // this.$set(this.formRules, key, rules);
        // }
        this.$set(this.formData, field.field, "");
        this.$set(this.formRules, field.field, rules);
      }
    });
    if (this.type !== "add") {
      for (const key in this.editData) {
        this.$set(this.formData, key, this.editData[key]);
      }
    }
  },
  methods: {
    valueToNumber(field, v) {
      if (/^[^.]\d*\.$/.test(v)) {
        return;
      }
      const num = parseFloat(v);
      this.formData[field] = isNaN(num) ? 0 : num;
    },
    getMethod(type) {
      switch (type) {
        case "input":
          return "输入";
        case "select":
          return "选择";
      }
    },
    validateForm() {
      return new Promise(resolve => {
        this.$refs.form.validate(valid => {
          if (valid) {
            resolve();
          }
        });
      });
    }
  },
  watch: {
    formData: {
      handler() {
        this.$emit("change", { ...this.formData });
      },
      deep: true
    }
  }
};
</script>

<style lang="less" scoped>
::v-deep .el-input__inner {
  width: 178px;
}
::v-deep .el-row {
  flex-wrap: wrap;
}
.block {
  width: 100%;
  height: 100%;
  text-align: center;
}
.demonstration {
  text-align: center;
}
</style>
