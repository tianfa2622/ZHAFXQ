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
      label: '访问时间',
      param: 'fwRqsj',
      align: 'center'
    },
    {
      label: '姓名',
      param: 'fkxxXm',
      align: 'center'
    },
    {
      label: '身份证号码',
      param: 'fkxxGmsfzhm',
      align: 'center'
    },
    {
      label: '联系电话',
      param: 'fkxxLxdh',
      align: 'center'
    },
    {
      label: '机动车号牌号码',
      param: 'fkxxJdchphm',
      align: 'center'
    },
    {
      label: '事由',
      param: 'fwSy',
      align: 'center'
    }
  ],
  tableOption: {
    label: '操作',
    align: 'center',
    options: [
      {
        label: '查看',
        type: 'text',
        size: 'mini',
        methods: 'toView',
        style: 'color:#1abc9c'
      }
    ]
  }
}
export default options
