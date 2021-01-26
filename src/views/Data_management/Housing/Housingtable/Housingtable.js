import { getSelectAll } from "@/api/Data_management/housing/index";
const options = {
  size: "small",
  CardAttributes: {
    class: " pb-25 h-100 flex1 posi-rel over-h",
    body: "height: 100%"
  },
  HeaderCellStyle: { background: " #f2f2f2 !important", color: "#000" },
  // 表头数据
  tableColumns: [
    {
      label: "房屋编号",
      param: "fwbh",
      align: "center"
    },
    {
      label: "户主姓名",
      param: "fzXm",
      align: "center"
    },
    {
      label: "户主身份证号码",
      param: "fzGmsfzhm",
      align: "center"
    },
    {
      label: "房屋类别",
      param: "fwlbdm",
      align: "center"
    },
    {
      label: "联系方式",
      param: "fzLxdh",
      align: "center"
    },
    {
      label: "房屋地址",
      param: "dzmc",
      align: "center"
    }
  ],
  tableOption: {
    label: "操作",
    align: "center",
    options: [
      {
        label: "详情",
        type: "text",
        // size: "mini",
        methods: "toView",
        style: "color:#39c5aa"
      },
      {
        label: "编辑",
        type: "text",
        // size: "mini",
        methods: "editor",
        style: "color:#39c5aa"
      }
    ]
  },
  // 表格数据
  tableData: [],
  pagination: {
    isBackC: true,
    isShow: true,
    currentPage: 1,
    rows: 10,
    total: 20
  }
};
let paramsData = {
  fwlbdm: "",
  fzGMsfzhm: ""
};
getSelectAll(paramsData).then(res => {
  if (res.code === 1) {
    options.tableData = res.data.records;
  } else {
    this.$message.error(res.message);
  }
  console.log(res);
});
export default options;
