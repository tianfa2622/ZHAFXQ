const options = {
  rules: {},
  form: {
    inline: true,
    size: "small"
  },
  itemColumns: [
    {
      span: 6,
      label: "姓名：",
      prop: "fkxxXm",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 6,
      label: "身份证号：",
      prop: "fkxxGmsfzhm",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 7,
      label: "访问时间：",
      prop: "fwRqsj",
      type: "date",
      class: "",
      clearable: true
    }
  ],
  btnData: {
    span: 5,
    style: "flex:auto;     text-align: end;",
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
