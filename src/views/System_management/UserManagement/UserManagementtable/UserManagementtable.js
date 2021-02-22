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
      label: '用户名',
      param: 'userName',
      align: 'center'
    },
    {
      label: '姓名',
      param: 'realName',
      align: 'center'
    },
    {
      label: '所属单位',
      param: 'dwmc',
      align: 'center'
    },
    {
      label: '更新时间',
      param: 'updateTime',
      align: 'center'
    },
    {
      label: '状态',
      param: 'state',
      align: 'center',
      render: row => {
        if (row.state === '0') {
          return '正常'
        } else if (row.state === '1') {
          return '禁用'
        }
      }
    }
  ],
  tableOption: {
    label: '操作',
    align: 'center',
    options: [
      {
        label: '权限',
        type: 'text',
        size: 'mini',
        methods: 'Authority'
      },
      {
        label: '禁用',
        type: 'text',
        size: 'mini',
        methods: 'Disable',
        condition: row => {
          return row.status === '正常'
        }
      },
      {
        label: '解禁',
        type: 'text',
        size: 'mini',
        methods: 'Disable',
        condition: row => {
          return row.status === '禁用'
        }
      }
    ]
  }
}
export default options
