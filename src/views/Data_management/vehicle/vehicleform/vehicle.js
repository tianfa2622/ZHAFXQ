const options = {
  rules: {},
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    {
      span: 7,
      label: '',
      prop: 'area',
      type: 'area',
      level: 2
    },
    {
      span: 5,
      label: '小区名称：',
      prop: 'xqMc',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 5,
      label: '车主姓名：',
      prop: 'czXm',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 5,
      label: '车牌号码：',
      prop: 'cphm',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 10,
      label: '车辆类别：',
      prop: 'cllb',
      type: 'select',
      class: '',
      // style: "text-align:center",
      options: [
        {
          label: '机动车',
          value: '1'
        },
        {
          label: '电动车',
          value: '2'
        }
      ]
    }
  ],
  btnData: {
    span: 9,
    style: 'text-align: end;',
    BtndataList: [
      {
        type: 'success',
        style: '',
        size: 'small',
        class: 'w100',
        methods: 'search',
        label: '搜索'
      },
      {
        type: 'primary',
        style: '',
        size: 'small',
        class: 'w100',
        methods: 'add',
        label: '新增'
      }
    ]
  }
}
export default options
