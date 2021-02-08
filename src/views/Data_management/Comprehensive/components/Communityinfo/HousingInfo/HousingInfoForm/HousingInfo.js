const options = {
  rules: {},
  formData: {
    BuildingName: ""
  },
  form: {
    inline: true,
    size: "small"
  },
  itemColumns: [
    {
      span: 24,
      label: "楼栋名称:",
      prop: "BuildingName",
      type: "text",
      clearable: true,
      class: ""
    }
  ]
};
export default options;
