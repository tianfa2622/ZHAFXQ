const options = {
  rules: {},
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    {
      span: 8,
      label: '查询类型：',
      prop: 'cxlx',
      type: 'select',
      class: '',
      style: 'text-align:center;',
      options: [
        {
          label: '按人员',
          value: 1
        },
        {
          label: '按车辆',
          value: 2
        },
        {
          label: '按房屋',
          value: 3
        }
      ]
    },
    {
      span: 8,
      label: '',
      prop: 'area',
      type: 'area',
      style: 'text-align:center',
      level: 2
    },
    {
      span: 8,
      label: '小区名称:',
      prop: 'xqxxbz',
      type: 'text',
      clearable: true,
      style: 'text-align:center',
      class: ''
    },
    {
      span: 8,
      label: '户主姓名：',
      prop: 'xm',
      type: 'text',
      class: '',
      style: 'text-align:center',
      clearable: true
    },
    {
      span: 8,
      label: '身份证号码:',
      prop: 'zjhm',
      type: 'text',
      clearable: true,
      class: '',
      style: 'text-align:center'
    }
  ],
  btnData: {
    span: 5,
    style: 'flex:auto;text-align: center;',
    // class: "mr-60",
    BtndataList: [
      {
        type: 'success',
        style: '',
        size: 'small',
        methods: 'search',
        label: '查询'
      }
    ]
  }
}
export default options
