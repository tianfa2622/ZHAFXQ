const options = {
  rules: {},
  form: {
    inline: true,
    size: "small"
  },
  itemColumns: [
    {
      span: 8,
      label: "",
      prop: "area",
      type: "area",
      level: 2
    },
    {
      span: 6,
      label: "小区名称:",
      prop: "xqxxbz",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 6,
      label: "姓名:",
      prop: "xm",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 8,
      label: "身份证号码:",
      prop: "zjhm",
      type: "text",
      clearable: true,
      class: "",
      itemStyle: "margin-left: 10px;",
      style: "width: 322px"
    },
    {
      span: 6,
      label: "现住地址:",
      prop: "hjdzQhnxxdz",
      type: "text",
      clearable: true,
      class: ""
      // style: "text-align:center"
    }
  ],
  btnData: {
    span: 6,
    // style: "flex:auto;     text-align: end;",
    BtndataList: [
      {
        type: "success",
        class: "w120",
        style: "",
        size: "small",
        methods: "search",
        label: "搜索"
      },
      {
        type: "primary",
        class: "w120",
        style: "",
        size: "small",
        methods: "Increase",
        label: "新增"
      }
    ]
  }
};
export default options;
