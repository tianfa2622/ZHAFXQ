const options = {
  rules: {},
  form: {
    inline: true,
    size: 'small'
  },
  itemColumns: [
    // {
    //   span: 7,
    //   label: " 发布类型：",
    //   prop: "ReleaseType",
    //   type: "select",
    //   class: "",
    //   options: [
    //     {
    //       label: "机动车",
    //       value: 1
    //     },
    //     {
    //       label: "电动车",
    //       value: 2
    //     }
    //   ]
    // },
    {
      span: 7,
      label: '感知预警事件类型：',
      prop: 'gzyjsjlx',
      type: 'select',
      clearable: true,
      class: '',
      options: [
        {
          label: '0',
          value: '0'
        },
        {
          label: '1',
          value: '1'
        },
        {
          label: '2',
          value: '2'
        }
      ]
    },
    {
      span: 7,
      label: '预警状态：',
      prop: 'yjzt',
      type: 'select',
      clearable: true,
      class: '',
      options: [
        {
          label: '1',
          value: 1
        },
        {
          label: '2',
          value: 2
        }
      ]
    },
    {
      span: 8,
      label: '预警时间：',
      prop: 'yjRqsj',
      type: 'datetime',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
      class: '',
      clearable: true
    }
  ],
  btnData: {
    span: 16,
    style: 'text-align: end;',
    BtndataList: [
      {
        type: 'success',
        style: '',
        class: 'w100',
        size: 'small',
        methods: 'search',
        label: '搜索'
      },
      {
        type: 'primary',
        class: 'w100',
        style: '',
        size: 'small',
        methods: 'add',
        label: '新增'
      }
    ]
  }
}
export default options
