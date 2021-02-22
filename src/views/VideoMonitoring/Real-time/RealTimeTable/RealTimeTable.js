const options = {
  size: 'mini',
  CardAttributes: {
    title: '未在线设备',
    class: ' pb-25 h-100 flex1 posi-rel over-h',
    body: 'height: calc(100% - 58px)'
  },
  HeaderCellStyle: { background: ' #f2f2f2 !important', color: '#000' },
  // 表头数据
  tableColumns: [
    {
      label: '设备名称',
      param: 'DeviceName'
      // align: "center"
    },
    {
      label: 'IP地址',
      param: 'IPaddress'
      // align: "center"
    },
    {
      label: 'MAC地址',
      param: 'MACaddress'
      // align: "center"
    },
    {
      label: '网络端口号',
      param: 'NetworkPortNumber'
      // align: "center"
    }
  ],
  // 表格数据
  tableData: [
    // {
    //   DeviceName: "",
    //   IPaddress: "",
    //   MACaddress: ""
    //   NetworkPortNumber: "",
    // }
    {},
    {},
    {},
    {}
  ]
  // pagination: {
  //   isBackC: true,
  //   isShow: true,
  //   currentPage: 1,
  //   rows: 10,
  //   total: 20
  // }
}
export default options
