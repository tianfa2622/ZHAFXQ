const options = {
  rules: {},
  form: {
    inline: true,
    size: "small"
  },
  itemColumns: [
    {
      span: 7,
      label: "",
      prop: "area",
      type: "area",
      level: 2
    },
    {
      span: 5,
      label: "小区名称：",
      prop: "xqxxbz",
      clearable: true,
      type: "text"
    }
  ],
  btnData: {
    span: 5,
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
