import { getSelectAll } from "@/api/Data_management/vehicle/index";
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
      label: "车主姓名",
      param: "cz",
      align: "center"
    },
    {
      label: "车牌号码",
      param: " jdchphm",
      align: "center"
    },
    {
      label: "联系电话",
      param: "czLxdh",
      align: "center"
    },
    {
      label: "车辆类别",
      param: " jdccllxdm",
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
  czXm: "",
  jdchphm: ""
};
getSelectAll(paramsData).then(res => {
  if (res.code === 1) {
    options.tableData = res.data.records;
  } else {
    this.$message.error(res.message);
  }
});
export default options;
