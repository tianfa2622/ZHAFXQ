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
      label: '房屋编号',
      param: 'houseNumber',
      align: 'center'
    },
    {
      label: '楼层号',
      param: 'FloorNumber',
      align: 'center'
    },
    {
      label: '房主姓名',
      param: 'HomeownerName',
      align: 'center'
    },
    {
      label: '居住人数',
      param: 'ResidentsNumber',
      align: 'center'
    },
    {
      label: '建筑面积(㎡)',
      param: 'constructionArea',
      align: 'center'
    },
    {
      label: '房屋类别',
      param: 'HousingCategory',
      align: 'center'
    },
    {
      label: '地址',
      param: 'Address',
      align: 'center'
    }
  ],
  tableOption: {
    label: '操作',
    width: '180px',
    align: 'center',
    options: [
      {
        label: '详情',
        type: 'text',
        size: 'mini',
        methods: 'details',
        style: 'color:rgba(26, 188, 156, 1)'
      },
      {
        label: '查看人房关系',
        type: 'text',
        size: 'mini',
        methods: 'ViewRelationship',
        style: 'color:rgba(26, 188, 156, 1)'
      }
    ]
  },
  // 表格数据
  tableData: [
    {
      houseNumber: '2020-10-1',
      FloorNumber: '张小刚',
      HomeownerName: '24',
      ResidentsNumber: '长沙市芙蓉区宽寓大厦',
      constructionArea: '',
      HousingCategory: '',
      Address: ''
    },
    {},
    {},
    {},
    {}
  ],
  pagination: {
    isBackC: true,
    isShow: true,
    currentPage: 1,
    rows: 10,
    total: 20
  }
}
export default options
