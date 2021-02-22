import { getqueryPatrolplan } from '@/api/home'
const options = {
  CardAttributes: {
    // title: "设备信息",
    class: 'h-100 w-100',
    // style:'over-flow: hidden',
    body: 'padding:0px',
    shadow: 'never'
  },
  size: 'small',
  HeaderCellStyle: { background: ' #333333 !important', color: '#fff' },
  RowStyle: { background: '#141d49 !important', color: '#fff' },
  // 表头数据
  tableColumns: [
    {
      label: '巡查预案名称',
      param: 'ycyaMc'
    },
    {
      label: '关键词',
      param: 'gjc'
    },
    {
      label: '简要情况',
      param: 'jyqk'
    },
    {
      label: '详细情况',
      param: 'xxqk'
    },
    {
      label: '录入时间',
      param: 'lrsj'
    },
    {
      label: '电子文件URL',
      param: 'dzwjurl',
      render: row => {
        if (row.dzwjurl === '0') {
          return '暂无'
        } else {
          return row.dzwjurl
        }
      }
    },
    {
      label: '登记人姓名及电话',
      param: 'djr'
    }
  ],
  // 表格数据
  tableData: []
}
getqueryPatrolplan('1').then(res => {
  if (res.code === 1) {
    options.tableData = res.data
  } else {
    this.$message.error(res.message)
  }
})
export default options
