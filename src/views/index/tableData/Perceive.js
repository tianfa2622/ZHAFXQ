import { getqueryPerceptionwarning } from "@/api/home/api";
const options = {
  CardAttributes: {
    // title: "设备信息",
    class: "h-100 w-100",
    // style:'over-flow: hidden',
    body: "padding:0px",
    shadow: "never"
  },
  size: "small",
  HeaderCellStyle: { background: " #333333 !important", color: "#fff" },
  RowStyle: { background: " #141d49 !important", color: "#fff" },
  // 表头数据
  tableColumns: [
    {
      label: "预警日期",
      param: "yjRqsj"
    },
    {
      label: "感知预警事件类型",
      param: "gzyjsjlx",
      render: row => {
        if (row.gzyjsjlx === "0") {
          return "人员异常";
        } else if (row.gzyjsjlx === "1") {
          return "车辆异常";
        } else {
          return "聚集异常";
        }
      }
    },
    {
      label: "预警状态",
      param: "yjzt",
      render: row => {
        if (row.yjzt === "0") {
          return "未处理";
        } else if (row.yjzt === "1") {
          return "处理中";
        } else {
          return "已完成";
        }
      }
    },
    {
      label: "采集时间",
      param: "cjsj"
    },
    {
      label: "采集系统信息",
      param: "ch1Clsj"
    },
    {
      label: "处理人姓名及电话",
      param: "clr"
    },
    {
      label: "处理结果",
      param: "ch1Cljg",
      render: row => {
        if (row.ch1Cljg === "0") {
          return "已处理";
        } else {
          return "未处理";
        }
      }
    }
  ],
  // 表格数据
  tableData: []
};
getqueryPerceptionwarning().then(res => {
  options.tableData = res;
});
export default options;
