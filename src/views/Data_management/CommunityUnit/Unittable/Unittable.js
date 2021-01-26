import { getSelectAll } from "@/api/Data_management/Residential_units/index";
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
      label: "单位名称",
      param: "dwmc",
      align: "center"
    },
    {
      label: "统一社会信用代码",
      param: "tyshxydm",
      align: "center"
    },
    {
      label: "法人姓名",
      param: "djr",
      align: "center"
    },
    {
      label: "单位地址",
      param: "dwQhnxxdz",
      align: "center"
    },
    {
      label: "小区名称",
      param: "xqxxbz",
      align: "center"
    }
  ],
  tableOption: {
    label: "操作",
    align: "center",
    options: [
      {
        label: "查看",
        type: "text",
        // size: "mini",
        methods: "toView"
      },
      {
        label: "编辑",
        type: "text",
        // size: "mini",
        methods: "editor"
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
  dwmc: "",
  tyshxydm: "",
  wtdlrXM: ""
};
getSelectAll(paramsData).then(res => {
  if (res.code === 1) {
    options.tableData = res.data.records;
  } else {
    this.$message.error(res.message);
  }
});
export default options;
