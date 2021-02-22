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
      label: '姓名',
      param: 'xm',
      align: 'center'
    },
    {
      label: '性别',
      param: 'xbdm',
      align: 'center',
      render: row => {
        if (row.xbdm === '0') {
          return '男'
        } else if (row.xbdm === '1') {
          return '女'
        }
      },
      class: () => {
        return ''
      }
    },
    {
      label: '民族',
      param: 'mzdm',
      align: 'center'
    },
    {
      label: '联系电话',
      param: 'djrLxdh',
      align: 'center'
    },
    {
      label: '管控事由',
      param: 'gldyGksy',
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
        methods: 'toView'
      }
    ]
  }
}
export default options
