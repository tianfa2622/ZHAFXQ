const options = {
  rules: {},
  formData: {
    area: [],
    userName: "",
    Name: "",
    status: ""
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
      label: "用户名：",
      prop: "userName",
      type: "text",
      class: "",
      clearable: true
    },
    {
      span: 5,
      label: "姓名：",
      prop: "Name",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 6,
      label: "状态：",
      prop: "status",
      type: "select",
      class: "",
      clearable: true,
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
