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
      label: '停车位编号',
      param: 'tcwbh',
      align: 'center'
    },
    {
      label: '车位类型',
      param: 'cwlx',
      align: 'center'
    },
    {
      label: '车位归属类型',
      param: 'cwgslx',
      align: 'center'
    },
    {
      label: '车位所有人名称',
      param: 'cwsyrXm',
      align: 'center'
    },
    {
      label: '楼层号',
      param: 'lch',
      align: 'center'
    },
    {
      label: '数据更新时间',
      param: 'gxsj',
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
        methods: 'Details'
      }
    ]
  }
}
export default options
