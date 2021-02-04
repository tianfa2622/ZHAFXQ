const options = {
  rules: {},
  form: {
    inline: true,
    size: "small"
  },
  itemColumns: [
    {
      span: 7,
      label: " 发布类型：",
      prop: "fblx",
      type: "select",
      class: "",
      options: [
        {
          label: "其他",
          value: "0"
        },
        {
          label: "机动车",
          value: "1"
        },
        {
          label: "电动车",
          value: "2"
        }
      ]
    },
    {
      span: 7,
      label: "发布内容：",
      prop: "fbnr",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 7,
      label: "发布时间：",
      prop: "fbRqsj",
      type: "datetime",
      class: "",
      clearable: true,
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
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
