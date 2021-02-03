const options = {
  rules: {},
  form: {
    inline: true,
    size: "small"
  },
  itemColumns: [
    // {
    //   span: 7,
    //   label: " 发布类型：",
    //   prop: "ReleaseType",
    //   type: "select",
    //   class: "",
    //   options: [
    //     {
    //       label: "机动车",
    //       value: 1
    //     },
    //     {
    //       label: "电动车",
    //       value: 2
    //     }
    //   ]
    // },
    {
      span: 7,
      label: "巡查预案名称：",
      prop: "PlanName",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 7,
      label: "关键词：",
      prop: "KeyWords",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 8,
      label: "录入时间：",
      prop: "EntryTime",
      type: "daterange",
      class: "",
      clearable: true,
      pickerOptions: {
        shortcuts: [
          {
            text: "本月",
            onClick(picker) {
              picker.$emit("pick", [new Date(), new Date()]);
            }
          },
          {
            text: "今年至今",
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近六个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
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
        methods: "add",
        label: "新增"
      }
    ]
  }
};
export default options;
