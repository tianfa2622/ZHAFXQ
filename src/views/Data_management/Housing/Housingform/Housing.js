// import { getHousingCategory } from "@/api/Data_management/housing/index";
// let data = {
//   current: 1,
//   size: 20
// };
// getHousingCategory(data).then(res => {
//   console.log(res.data.records.length);
//   if (res.code === 1) {
//     for (let i = 0; i < res.data.records.length; i++) {
//       if (options.itemColumns[i].options) {
//         options.itemColumns[i].options.push({
//           label: res.data.records[i].categoryMc,
//           value: res.data.records[i].id
//         });
//         return;
//       }
//     }
//   }
// });
const options = {
  rules: {},
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
      label: "小区名称:",
      prop: "xqxxmc",
      type: "text",
      clearable: true,
      class: ""
    },
    {
      span: 5,
      label: "房屋类别：",
      prop: "fwlbdm",
      type: "select",
      class: "",
      options: [
        {
          label: "单元楼或公寓楼",
          value: "10"
        },
        {
          label: "筒子楼",
          value: "20"
        },
        {
          label: "别墅",
          value: "30"
        },
        {
          label: "自建楼",
          value: "40"
        },
        {
          label: "平房",
          value: "50"
        },
        {
          label: "四合院",
          value: "60"
        },
        {
          label: "其他",
          value: "90"
        }
      ]
    },
    {
      span: 5,
      label: "户主姓名：",
      prop: "fzXm",
      type: "text",
      class: "",
      clearable: true
    },
    {
      span: 7,
      label: "身份证号码：",
      prop: " fzGmsfzhm",
      type: "text",
      clearable: true,
      class: "",
      style: "text-align:center"
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
