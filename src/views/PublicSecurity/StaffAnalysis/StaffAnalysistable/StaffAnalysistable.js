import { getSelectAll } from "@/api/PublicSecurity/StaffAnalysis/index";
// import { render } from "less";
const options = {
  size: "small",
  CardAttributes: {
    class: " pb-25 h-100 flex1 posi-rel over-h",
    body: "height: 100%"
  },
  HeaderCellStyle: { background: " #f2f2f2 !important", color: "#000" },
  // 表头数据
  tableColumns: [
    {
      label: "小区名称",
      param: "jlxxqmc",
      align: "center"
    },
    {
      label: "常住人口",
      param: "czrks",
      align: "center"
    },
    {
      label: "常住人口比",
      param: "czrkb",
      align: "center",
      render: row => {
        var num = row.czrks;
        let total = row.czrks + row.ldrks + row.zdrys;
        return percentage(num, total);
      }
    },
    {
      label: "流动人口数",
      param: "ldrks",
      align: "center"
    },
    {
      label: "流动人口比",
      param: "ldrkb",
      align: "center",
      render: row => {
        var num = row.ldrks;
        let total = row.czrks + row.ldrks + row.zdrys;
        return percentage(num, total);
      }
    },
    {
      label: "重点人员数",
      param: "zdrys",
      align: "center"
    },
    {
      label: "重点人员比",
      param: "zdryb",
      align: "center",
      render: row => {
        var num = row.zdrys;
        let total = row.czrks + row.ldrks + row.zdrys;
        return percentage(num, total);
      }
    }
  ],
  // 表格数据
  tableData: [],
  pagination: {
    isBackC: true,
    isShow: true,
    currentPage: 1,
    rows: 10,
    total: 20
  }
};
let paramsData = {
  current: options.pagination.currentPage,
  size: options.pagination.rows
};
getSelectAll(paramsData).then(res => {
  if (res.code === 1) {
    options.tableData = res.data.records;
    options.pagination.total = res.data.total;
  } else {
    this.$message.error(res.message);
  }
});

function percentage(num, total) {
  if (num == 0 || total == 0) {
    return 0;
  }
  return Math.round((num / total) * 10000) / 100.0 + "%";
}
export default options;
