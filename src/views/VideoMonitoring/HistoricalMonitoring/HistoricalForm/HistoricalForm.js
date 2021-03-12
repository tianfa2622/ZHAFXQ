const options = {
  rules: {},
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    {
      label: '',
      prop: 'area',
      type: 'area',
      level: 2,
      span: 15
    }
  ],
  btnData: {
    span: 5,
    // style: "flex:auto;     text-align: start;",
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
