const options = {
  rules: {},
  formData: {
    area: [],
    searchFor: ""
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
      span: 9,
      label: "",
      prop: "sbmc",
      type: "text",
      // class: "w-100",
      style: "width:320px",
      clearable: true,
      placeholder: "请输入您要搜索的设备名称、IP地址或小区名"
    }
  ],
  btnData: {
    span: 5,
    // style: "flex:auto;     text-align: end;",
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
