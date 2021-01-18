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
      label: "姓名",
      param: "Name",
      align: "center"
    },
    {
      label: "身份证号码",
      param: "IDCradNum",
      align: "center"
    },
    {
      label: "联系电话",
      param: "contactNumber",
      align: "center"
    },
    {
      label: "现住地址",
      param: "CurrentAddress",
      align: "center"
    },
    {
      label: "所有车牌号码",
      param: "AllLicensePlateNumbers",
      align: "center"
    },
    {
      label: "所有房产小区名称",
      param: "AllRealEstateCommunityNames",
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
        methods: "Details"
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      Name: "湖南华润科技有限公司",
      IDCradNum: "914301020749881625",
      contactNumber: "张三",
      CurrentAddress: "长沙市芙蓉区宽寓大厦",
      AllLicensePlateNumbers: "",
      AllRealEstateCommunityNames: ""
    },
    {
      Name: "湖南华润科技有限公司",
      IDCradNum: "914301020749881625",
      contactNumber: "张三",
      CurrentAddress: "长沙市芙蓉区宽寓大厦",
      AllLicensePlateNumbers: "",
      AllRealEstateCommunityNames: ""
    },
    {
      Name: "湖南华润科技有限公司",
      IDCradNum: "914301020749881625",
      contactNumber: "张三",
      CurrentAddress: "长沙市芙蓉区宽寓大厦",
      AllLicensePlateNumbers: "",
      AllRealEstateCommunityNames: ""
    },
    {
      Name: "湖南华润科技有限公司",
      IDCradNum: "914301020749881625",
      contactNumber: "张三",
      CurrentAddress: "长沙市芙蓉区宽寓大厦",
      AllLicensePlateNumbers: "",
      AllRealEstateCommunityNames: ""
    }
  ],
  pagination: {
    isBackC: true,
    isShow: true,
    currentPage: 1,
    rows: 10,
    total: 20
  }
};
export default options;
