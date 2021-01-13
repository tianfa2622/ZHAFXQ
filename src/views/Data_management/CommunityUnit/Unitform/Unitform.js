const options = {
  rules: {},
  formData: {
    area: [],
    companyName: "",
    CorporateName: "",
    SocialCreditCode: ""
  },
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
      label: "单位名称：",
      prop: "companyName",
      type: "text",
      class: "",
      clearable: true
    },
    {
      span: 5,
      label: "法人姓名：",
      prop: "CorporateName",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 6,
      label: "统一社会信用代码：",
      prop: "SocialCreditCode",
      type: "text",
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
      },
      {
        type: "primary",
        style: "",
        size: "small",
        methods: "Increase",
        label: "新增"
      }
    ]
  }
};
export default options;
