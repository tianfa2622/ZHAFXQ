<template>
  <el-dialog
    :title="title || ''"
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
      :editData="editData"
      :inline="inline"
      @change="handlerChange"
      :labelWidth="labelWidth"
    />
    <template slot="footer" v-if="type !== 'view'">
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
    editData: {
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
    },
    title: {
      type: String
    }
  },
  computed: {
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
