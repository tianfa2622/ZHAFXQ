const options = {
  rules: {},
  formData: {
    area: [],
    CommunityName: "",
    HousingCategory: "",
    IDNumber: "",
    Householder: ""
  },
  form: {
    inline: true,
    size: "small"
  },
  itemColumns: [
    {
      span: 7,
      label: "门禁点名称:",
      prop: "AccessPoint",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 8,
      label: "行进方向:",
      prop: "TravelDirection",
      type: "select",
      class: "",
      style: "text-align:center;",
      options: [
        {
          label: "进",
          value: 1
        },
        {
          label: "出",
          value: 2
        },
        {
          label: "进/出",
          value: 3
        }
      ]
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
