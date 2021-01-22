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
      span: 8,
      label: "停车位编号：",
      prop: "ParkingSpaceNumber",
      style: "text-align:center",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 8,
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
      span: 8,
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
      span: 8,
      label: "车位所有人名称：",
      prop: "VehicleOwner",
      type: "select",
      class: "mr-30",
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
    style: "flex:auto; text-align: end; padding-right:80px",
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
