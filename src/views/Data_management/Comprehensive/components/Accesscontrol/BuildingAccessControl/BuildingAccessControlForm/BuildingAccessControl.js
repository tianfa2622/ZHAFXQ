const options = {
  rules: {},
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    {
      span: 6,
      label: '姓名:',
      prop: 'xm',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 6,
      label: '身份证号码:',
      prop: 'gmsfzhm',
      type: 'text',
      clearable: true,
      class: ''
    },
    {
      span: 6,
      label: '开门方式:',
      prop: 'kmfsdm',
      type: 'select',
      class: '',
      style: 'text-align:center;',
      options: [
        {
          label: '刷卡开门',
          value: '1'
        },
        {
          label: '密码开门',
          value: '2'
        },
        {
          label: '身份证开门',
          value: '3'
        },
        {
          label: '二维码开门',
          value: '4'
        },
        {
          label: '人脸识别开门',
          value: '5'
        },
        {
          label: '指纹开门',
          value: '6'
        },
        {
          label: '蓝牙开门',
          value: '7'
        },
        {
          label: '远程开门',
          value: '8'
        },
        {
          label: '访客授权',
          value: '9'
        }
      ]
    }
  ],
  btnData: {
    span: 5,
    style: 'flex:auto;     text-align: end;',
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
