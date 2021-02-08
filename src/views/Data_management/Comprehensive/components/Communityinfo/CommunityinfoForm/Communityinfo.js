const options = {
  rules: {},
  form: {
    inline: true,
    size: "small"
  },
  itemColumns: [
    {
      span: 6,
      label: "楼栋名称:",
      prop: "mc",
      type: "text",
      clearable: true,
      class: ""
    }
  ],
  btnData: {
    span: 18,
    BtndataList: [
      {
        type: "success",
        style: "",
        size: "small",
        methods: "search",
        label: "搜索"
      }
    ]
  }
};
export default options;
