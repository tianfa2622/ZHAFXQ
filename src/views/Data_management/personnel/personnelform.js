const options = {
  rules: {},
  formData: {
    area: [],
    VillageName: ""
  },
  form: {
    inline: true,
    size: "small"
  },
  itemColumns: [
    {
      span: 9,
      label: "",
      prop: "area",
      type: "area",
      level: 2
    },
    {
      span: 5,
      label: "小区名称",
      prop: "VillageName",
      type: "text",
      clearable: true,
      class: ""
    }
  ],
  btnData: {
    span: 5,
    BtndataList: [
      {
        type: "success",
        class: "",
        style: "",
        size: "small",
        methods: "search",
        label: "搜索"
      }
    ]
  }
};
export default options;
