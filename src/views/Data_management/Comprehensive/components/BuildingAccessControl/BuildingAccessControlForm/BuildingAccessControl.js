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
      span: 6,
      label: "姓名:",
      prop: "Name",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 6,
      label: "身份证号码:",
      prop: "IDNumber",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 6,
      label: "开门方式:",
      prop: "DoorOpeningMethod",
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
      }
    ]
  }
};
export default options;
