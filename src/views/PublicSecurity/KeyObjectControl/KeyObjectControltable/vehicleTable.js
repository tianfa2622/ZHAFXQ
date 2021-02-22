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
      label: '车牌号',
      param: 'cphm',
      align: 'center'
    },
    {
      label: '品牌',
      param: 'zwppmc',
      align: 'center'
    },
    {
      label: '车辆颜色',
      param: 'clys',
      align: 'center'
    },
    {
      label: '车主姓名',
      param: 'xm',
      align: 'center'
    },
    {
      label: '管控事由',
      param: 'gksy',
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
        methods: 'cartoView'
      }
    ]
  }
}
export default options
