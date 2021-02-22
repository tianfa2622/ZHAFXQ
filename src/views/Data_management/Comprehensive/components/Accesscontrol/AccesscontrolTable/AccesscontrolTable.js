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
      label: '门禁点编号',
      param: 'mjdbh',
      align: 'center'
    },
    {
      label: '门禁点名称',
      param: 'mc',
      align: 'center'
    },
    {
      label: '关联门禁采集设备',
      param: 'gldmjCjsbxxbz',
      align: 'center'
    },
    {
      label: '关联抓拍采集设备',
      param: 'gldzpjCjsbxxbz',
      align: 'center'
    },
    {
      label: '行进方向',
      param: 'xjfx',
      align: 'center',
      render: row => {
        if (row.xjfx === '0') {
          return '进'
        } else if (row.xjfx === '1') {
          return '出'
        } else {
          return '进/出'
        }
      }
    },
    {
      label: '地球经度',
      param: 'dqjd',
      align: 'center'
    },
    {
      label: '地球纬度',
      param: 'dqwd',
      align: 'center'
    },
    {
      label: '楼栋单元',
      param: 'lddyxxbzMc',
      align: 'center'
    },
    {
      label: '登记人姓名及电话',
      param: 'djrXmDh',
      align: 'center'
    }
  ],
  tableOption: {
    label: '操作',
    align: 'center',
    options: [
      {
        label: '门禁记录',
        type: 'text',
        size: 'mini',
        methods: 'record',
        style: 'color:rgba(26, 188, 156, 1)'
      }
    ]
  }
}
export default options
