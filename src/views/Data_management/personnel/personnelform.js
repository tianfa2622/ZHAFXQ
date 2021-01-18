const options = {
  rules: {},
  formData: {
    area: [],
    CommunityName: "",
    // VillageName: "",
    Name: "",
    IDCardNum: "",
    CurrentAddress: ""
  },
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
      prop: "CommunityName",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 6,
      label: "姓名:",
      prop: "Name",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 8,
      label: "身份证号码:",
      prop: "IDCardNum",
      type: "text",
      clearable: true,
      class: "",
      style: "text-align:center"
    },
    {
      span: 6,
      label: "现住地址:",
      prop: "CurrentAddress",
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
