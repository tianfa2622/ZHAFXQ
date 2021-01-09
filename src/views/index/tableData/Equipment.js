const options = {
  CardAttributes: {
    title: "设备信息",
    class: "h-100 w-100",
    // style:'over-flow: hidden',
    body: "padding:0px",
    shadow: "never"
  },
  // 表头数据
  tableColumns: [
    {
      label: "设备名称",
      param: "EquipmentName",
      align: "center"
    },
    {
      label: "IP地址",
      param: "IPaddress",
      align: "center"
    },
    {
      label: "状态",
      param: "condition",
      align: "center",
      render: row => {
        if (row.condition === 0) {
          return "在线";
        } else if (row.condition === 1) {
          return "离线";
        }
      },
      class: row => {
        if (row.condition === 0) {
          return "status-Online";
        } else if (row.condition === 1) {
          return "status-Offline";
        }
      }
    }
  ],
  // 表格操作
  // tableOption: {
  //   align: 'center',
  //   options: [
  //     // {
  //     //   label: '编辑',
  //     //   type: 'primary',
  //     //   size: 'mini',
  //     //   methods: 'del',
  //     //   class: 'btn'
  //     // },
  //     {
  //       label: '删除',
  //       type: 'danger',
  //       size: 'mini',
  //       methods: 'del'
  //     }
  //   ]
  // },
  // 表格数据
  tableData: [
    {
      EquipmentName: "设备1",
      IPaddress: "192.168.1",
      condition: 0
    },
    {
      EquipmentName: "设备2",
      IPaddress: "192.168.1",
      condition: 0
    },
    {
      EquipmentName: "设备3",
      IPaddress: "192.168.1",
      condition: 0
    },
    {
      EquipmentName: "设备4",
      IPaddress: "192.168.1",
      condition: 0
    }
  ]
};
export default options;
