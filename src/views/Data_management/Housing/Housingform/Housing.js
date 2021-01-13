const options = {
  rules: {},
  formData: {
    area: [],
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
      label: "",
      prop: "area",
      type: "area",
      level: 2
    },
    {
      span: 6,
      label: "房屋类别：",
      prop: "HousingCategory",
      type: "select",
      class: "",
      options: [
        {
          label: "机动车",
          value: 1
        },
        {
          label: "电动车",
          value: 2
        }
      ]
    },
    {
      span: 6,
      label: "身份证号码：",
      prop: "IDNumber",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 5,
      label: "户主姓名：",
      prop: "Householder",
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
