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
      label: '日期',
      param: 'operationTime',
      align: 'center'
    },
    {
      label: '操作内容',
      param: 'content',
      align: 'center'
    },
    {
      label: '操作人',
      param: 'userId',
      align: 'center'
    }
  ],
  tableOption: {
    label: '操作',
    align: 'center',
    options: [
      {
        label: '详情',
        type: 'text',
        size: 'mini',
        methods: 'view'
      }
    ]
  }
}
export default options
