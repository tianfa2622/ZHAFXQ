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
      label: '巡查预案名称',
      param: 'ycyaMc',
      align: 'center'
    },
    {
      label: '关键词',
      param: 'gjc',
      align: 'center'
    },
    {
      label: '简要情况',
      param: 'jyqk',
      align: 'center'
    },
    {
      label: '详细情况',
      param: 'xxqk',
      align: 'center'
    },
    {
      label: '录入时间',
      param: 'lrsj',
      align: 'center'
    },
    {
      label: '电子文件URL',
      param: 'dzwjurl',
      align: 'center'
    },
    {
      label: '登记人姓名',
      param: 'djrXm'
      // align: "center"
    },
    {
      label: '登记人电话',
      param: 'djrLxdh'
      // align: "center"
    }
  ],
  tableOption: {
    label: '操作',
    align: 'center',
    options: [
      {
        label: '处理',
        type: 'text',
        size: 'mini',
        methods: 'edit',
        style: 'color:#39c5aa'
        // condition: row => {
        //   return row.status === 1;
        // }
      },
      {
        label: '处理结果',
        type: 'text',
        size: 'mini',
        methods: 'view',
        style: 'color:#39c5aa'
        // condition: row => {
        //   return row.status === 0;
        // }
      }
    ]
  }
}
export default options
