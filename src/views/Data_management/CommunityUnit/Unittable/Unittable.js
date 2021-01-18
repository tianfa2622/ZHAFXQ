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
      param: "companyName",
      align: "center"
    },
    {
      label: "统一社会信用代码",
      param: "SocialCreditCode",
      align: "center"
    },
    {
      label: "法人姓名",
      param: "CorporateName",
      align: "center"
    },
    {
      label: "单位地址",
      param: "UnitAddress",
      align: "center"
    },
    {
      label: "小区名称",
      param: "CommunityName",
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
  tableData: [
    {
      companyName: "湖南华润科技有限公司",
      SocialCreditCode: "914301020749881625",
      CorporateName: "张三",
      UnitAddress: "长沙市芙蓉区宽寓大厦",
      CommunityName: ""
    },
    {
      companyName: "湖南华润科技有限公司",
      SocialCreditCode: "914301020749881625",
      CorporateName: "张三",
      UnitAddress: "长沙市芙蓉区宽寓大厦",
      CommunityName: ""
    },
    {
      companyName: "湖南华润科技有限公司",
      SocialCreditCode: "914301020749881625",
      CorporateName: "张三",
      UnitAddress: "长沙市芙蓉区宽寓大厦",
      CommunityName: ""
    },
    {
      companyName: "湖南华润科技有限公司",
      SocialCreditCode: "914301020749881625",
      CorporateName: "张三",
      UnitAddress: "长沙市芙蓉区宽寓大厦",
      CommunityName: ""
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
