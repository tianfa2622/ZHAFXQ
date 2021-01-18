const options = {
  rules: {},
  formData: {
    area: [],
    CommunityName: "",
    ownerName: "",
    LicensePlateNumber: "",
    VehicleCategory: ""
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
      label: "小区名称：",
      prop: "CommunityName",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 5,
      label: "车主姓名：",
      prop: "ownerName",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 5,
      label: "车牌号码：",
      prop: "LicensePlateNumber",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 7,
      label: "车辆类别：",
      prop: "VehicleCategory",
      type: "select",
      class: "",
      style: "text-align:center",
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
