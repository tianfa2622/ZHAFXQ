<template>
  <el-dialog
    :title="title"
    :visible="visible"
    @close="closeEditor"
    destroy-on-close
    :width="width || ''"
  >
    <my-form
      ref="form"
      :disabled="disabled"
      :type="type"
      :fields="fields"
      :inline="inline"
      @change="handlerChange"
      :labelWidth="labelWidth"
    />
    <template slot="footer">
      <el-button @click="closeEditor">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "add",
      validator(v) {
        return ["add", "edit", "view"].includes(v);
      }
    },
    visible: {
      type: Boolean,
      required: true
    },
    propData: {
      type: Object
    },
    fields: {
      type: Array,
      required: true
    },
    labelWidth: {
      type: String
    },
    width: {
      type: String
    },
    inline: {
      type: Boolean
    }
  },
  computed: {
    title() {
      switch (this.type) {
        case "add":
          return "新增xxxx";
        case "edit":
          return "修改xxxx";
        case "view":
          return "查看xxxx";
        default:
          return "新增xxxx";
      }
    },
    disabled() {
      return this.type === "view";
    }
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    closeEditor() {
      this.$emit("update:visible", false);
    },
    handlerChange(formData) {
      this.formData = { ...formData };
    },
    confirm() {
      this.$refs.form.validateForm().then(() => {
        this.$emit("confirm", { ...this.formData });
      });
    }
  }
};
</script>

<style></style>
