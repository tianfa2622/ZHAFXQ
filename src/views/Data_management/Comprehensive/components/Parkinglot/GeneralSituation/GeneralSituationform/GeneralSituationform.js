const options = {
  rules: {},
  formData: {
    ParkingSpaceNumber: "",
    ParkingType: "",
    ParkingSpaceOwnership: "",
    VehicleOwner: ""
  },
  form: {
    inline: true,
    size: "small"
  },
  itemColumns: [
    {
      span: 5,
      label: "停车位编号：",
      prop: "ParkingSpaceNumber",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 7,
      label: "车位类型：",
      prop: "ParkingType",
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
    },
    {
      span: 7,
      label: "车位归属类型：",
      prop: "ParkingSpaceOwnership",
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
    },
    {
      span: 7,
      label: "车位所有人名称：",
      prop: "VehicleOwner",
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
      }
    ]
  }
};
export default options;
