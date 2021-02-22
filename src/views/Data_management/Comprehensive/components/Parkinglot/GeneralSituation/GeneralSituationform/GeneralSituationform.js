const options = {
  rules: {},
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    {
      span: 8,
      label: '停车位编号：',
      prop: 'tcwbh',
      style: 'text-align:center;padding-left:15px',
      type: 'input',
      clearable: true,
      class: ''
    },
    {
      span: 8,
      label: '车位类型：',
      prop: 'cwlx',
      type: 'select',
      class: '',
      style: 'text-align:center',
      options: [
        {
          label: '机动车',
          value: 1
        },
        {
          label: '电动车',
          value: 2
        }
      ]
    },
    {
      span: 8,
      label: '车位归属类型：',
      prop: 'cwgslx',
      type: 'select',
      class: '',
      style: 'text-align:center',
      options: [
        {
          label: '机动车',
          value: '123'
        },
        {
          label: '电动车',
          value: '2'
        }
      ]
    },
    {
      span: 8,
      label: '车位所有人名称：',
      prop: 'cwsyrXm',
      type: 'input',
      style: 'text-align:center',
      clearable: true
    }
  ],
  btnData: {
    span: 5,
    style: 'flex:auto; text-align: end; padding-right:80px',
    BtndataList: [
      {
        type: 'success',
        style: '',
        size: 'small',
        methods: 'search',
        label: '搜索'
      }
    ]
  }
}
export default options
