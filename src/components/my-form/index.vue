<template>
  <el-form
    ref="form"
    size="mini"
    :model="formData"
    :disabled="disabled"
    :inline="true || inline"
    :label-width="labelWidth || '100px'"
    :rules="formRules"
  >
    <!-- v-for 与 v-if 不可同时使用，所以使用不会渲染的template标签进行循环，再在el-form-item里面判断 -->
    <template v-for="field in fields">
      <!-- 如果field中存在hidden字段，并且hidden中包含type会返回true，会显示这个字段，所以使用感叹号反向，让他不显示 -->
      <el-form-item
        v-if="!(field.hidden && field.hidden.includes(type))"
        :key="field.field"
        :label="field.label"
        :prop="field.field"
      >
        <el-input
          v-if="field.type === 'input'"
          v-model="formData[field.field]"
          @input="
            field.dataType === 'number' && valueToNumber(field.field, $event)
          "
        />
        <el-select
          v-if="field.type === 'select'"
          v-model="formData[field.field]"
          style="width: 100%"
        >
          <el-option
            v-for="option in field.options"
            :key="option.label"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
        <el-input
          v-if="field.type === 'textarea'"
          type="textarea"
          :rows="4"
          v-model="formData[field.field]"
          resize="none"
        >
        </el-input>
      </el-form-item>
    </template>
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
      this.$set(this.formData, field.field, "");
      this.$set(this.formRules, field.field, rules);
    });
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
</style>
