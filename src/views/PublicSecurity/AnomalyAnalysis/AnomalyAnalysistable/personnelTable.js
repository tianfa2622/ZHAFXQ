const options = {
  size: 'small',
  CardAttributes: {
    class: ' pb-25 h-100 flex1 posi-rel over-h',
    body: 'height: 100%'
  },
  HeaderCellStyle: { background: ' #f2f2f2 !important', color: '#000' },
  // 表头数据
  tableColumns: [
    {
      label: '异常时间',
      param: 'crmjsj',
      align: 'center'
    },
    {
      label: '姓名',
      param: 'xm',
      align: 'center'
    },
    {
      label: '身份证号码',
      param: 'gmsfzhm',
      align: 'center'
    },
    {
      label: '是否为重点人员',
      param: 'rydjlx',
      align: 'center',
      render: row => {
        if (row.rydjlx === '0') {
          return '否'
        } else if (row.rydjlx === '1') {
          return '是'
        }
      },
      class: row => {
        if (row.rydjlx === '1') {
          return 'status-No'
        } else if (row.rydjlx === '0') {
          return 'status-Yes'
        }
      }
    },
    {
      label: '异常情况',
      param: 'ycqk',
      align: 'center'
    },
    {
      label: '处理结果',
      param: 'cljg',
      align: 'center'
    }
  ],
  tableOption: {
    label: '操作',
    align: 'center',
    options: [
      {
        label: '处 理',
        type: 'primary',
        size: 'mini',
        methods: 'dealWith',
        style: 'background-color:#363636; border-color:#363636;'
        // condition: row => {
        //   return row.KeyPersonnel === 0;
        // }
      }
      // {
      //   label: "未处理",
      //   type: "primary",
      //   size: "mini",
      //   methods: "dealWith",
      //   style: "background-color:#363636; border-color:#363636;",
      //   condition: row => {
      //     return row.KeyPersonnel === 1;
      //   }
      // }
    ]
  }
}
export default options
