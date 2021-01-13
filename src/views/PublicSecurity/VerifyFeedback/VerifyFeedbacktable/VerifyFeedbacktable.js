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
      label: "发布类型",
      param: "ReleaseType",
      align: "center"
    },
    {
      label: "发布内容",
      param: "PublishContent",
      align: "center"
    },
    {
      label: "发布日期",
      param: "ReleaseDate",
      align: "center"
    },
    {
      label: "发布方式",
      param: "ReleaseMethod",
      align: "center"
    },
    {
      label: "安装地址",
      param: "InstallationAddress",
      align: "center"
    },
    {
      label: "采集时间",
      param: "AcquisitionTime",
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
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      ReleaseType: "",
      PublishContent: "张小刚",
      ReleaseDate: "2020-01-13",
      ReleaseMethod: "24",
      InstallationAddress: "",
      AcquisitionTime: ""
    },
    {
      ReleaseType: "",
      PublishContent: "张小刚",
      ReleaseDate: "2020-01-13",
      ReleaseMethod: "24",
      InstallationAddress: "",
      AcquisitionTime: ""
    },
    {
      ReleaseType: "",
      PublishContent: "张小刚",
      ReleaseDate: "2020-01-13",
      ReleaseMethod: "24",
      InstallationAddress: "",
      AcquisitionTime: ""
    },
    {
      ReleaseType: "",
      PublishContent: "张小刚",
      ReleaseDate: "2020-01-13",
      ReleaseMethod: "24",
      InstallationAddress: "",
      AcquisitionTime: ""
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
