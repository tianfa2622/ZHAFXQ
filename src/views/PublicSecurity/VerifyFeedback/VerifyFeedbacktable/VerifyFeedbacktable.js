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
      label: '发布类型',
      param: 'fblx',
      align: 'center'
    },
    {
      label: '发布内容',
      param: 'fbnr',
      align: 'center'
    },
    {
      label: '发布日期',
      param: 'fbRqsj',
      align: 'center'
    },
    {
      label: '发布方式',
      param: 'fbfsdm',
      align: 'center'
    },
    {
      label: '安装地址',
      param: 'azdzQhnxxdz',
      align: 'center'
    },
    {
      label: '采集时间',
      param: 'cjsj',
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
        methods: 'toView',
        style: 'color:#39c5aa'
      }
    ]
  }
}
export default options
