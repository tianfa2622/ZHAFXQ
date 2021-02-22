import { getqueryApe } from '@/api/home'
const options = {
  CardAttributes: {
    title: '设备信息',
    class: 'h-100 w-100',
    // style:'over-flow: hidden',
    body: 'padding:10px',
    shadow: 'never'
  },
  HeaderCellStyle: { background: ' #333333!important', color: '#fff' },
  RowStyle: { background: '#141d49 !important', color: '#fff' },
  // 表头数据
  tableColumns: [
    {
      label: '设备名称',
      param: 'sbmc',
      align: 'center'
    },
    {
      label: 'IP地址',
      param: 'ipdz',
      align: 'center'
    },
    {
      label: '状态',
      param: 'zt',
      align: 'center',
      render: row => {
        if (row.zt === '1') {
          return '在线'
        } else if (row.zt === '0') {
          return '离线'
        }
      },
      class: row => {
        if (row.zt === '0') {
          return 'status-Offline'
        } else if (row.zt === '1') {
          return 'status-Online'
        }
      }
    }
  ],
  // 表格数据
  tableData: []
}
getqueryApe('1').then(res => {
  if (res.code === 1) {
    options.tableData = res.data
  } else {
    this.$message.error(res.message)
  }
})
export default options
