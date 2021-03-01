const fields = [
  {
    label: '小区名称：',
    field: 'xqxxbz',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '单元信息：',
    field: 'dyxxbz',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '楼栋信息：',
    field: 'ldxxbz',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '户主姓名：',
    field: 'fzXm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '户主联系电话：',
    field: 'fzLxdh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '户主身份证号码：',
    field: 'fzGmsfzhm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '居住人数：',
    field: 'jzRs',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '楼层号：',
    field: 'lch',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '房屋编号：',
    field: 'fwbh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '房屋信息：',
    field: 'fwxxbz',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '房屋类型',
    field: 'fwlxdm',
    type: 'select',
    options: [
      {
        label: '自住房',
        value: '10'
      },
      {
        label: '出租房',
        value: '20'
      }
    ]
  },
  {
    label: '建筑面积(㎡)：',
    field: 'jzMjpfm',
    type: 'input',
    dataType: 'object'
  },
  {
    label: '房屋间数：',
    field: 'fwjs',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '房屋类别',
    field: 'fwlbdm',
    type: 'select',
    options: [
      {
        label: '单元楼或公寓楼',
        value: '10'
      },
      {
        label: '筒子楼',
        value: '20'
      },
      {
        label: '别墅',
        value: '30'
      },
      {
        label: '自建楼',
        value: '40'
      },
      {
        label: '平房',
        value: '50'
      },
      {
        label: '四合院',
        value: '60'
      },
      {
        label: '其他',
        value: '90'
      }
    ]
  },
  {
    label: '是否为重点房屋：',
    field: 'sfwzdfwPdbz',
    type: 'select',
    options: [
      {
        label: '是',
        value: '1'
      },
      {
        label: '否',
        value: '0'
      }
    ]
  },
  {
    label: '房屋产权证号：',
    field: 'fwcqzh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '居住情况类型：',
    field: 'jzqklx',
    type: 'select',
    options: [
      {
        label: '自住',
        value: '0'
      },
      {
        label: '出租',
        value: '1'
      }
    ]
  },
  {
    label: '房屋所属单位：',
    field: 'fwssdw',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '地址：',
    field: 'dzmc',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '地址编码：',
    field: 'dzbm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '法定代表人：',
    field: 'fwssdwFddbrxm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '统一社会信用代码：',
    field: 'fwssdwTyshxydm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '登记人姓名：',
    field: 'djrXm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '登记人身份证号：',
    field: 'djrGmsfzhm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '登记人联系电话：',
    field: 'djrLxdh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '委托人姓名：',
    field: 'wtdlrXm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '委托人身份证号：',
    field: 'wtdlrGmsfzhm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '委托人联系电话：',
    field: 'wtdlrLxdh',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '备注：',
    field: 'bz',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '使用状态：',
    field: 'syztdm',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '治安管理信息所属警务责任区：',
    field: 'zaglxxssjwzrqdm',
    type: 'select',
    options: [
      {
        label: '万家丽',
        value: '1'
      },
      {
        label: '东塘',
        value: '1'
      }
    ]
  },
  {
    label: '地球经度：',
    field: 'dqjd',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '地球纬度：',
    field: 'dqwd',
    type: 'input',
    dataType: 'string'
  },
  {
    label: '数据更新时间：',
    field: 'gxsj',
    type: 'input',
    dataType: 'string',
    hidden: ['edit', 'add']
  },
  {
    label: '数据来源：',
    field: 'sjly',
    type: 'select',
    options: [
      {
        label: '测试1',
        value: '1'
      },
      {
        label: '测试2',
        value: '0'
      }
    ]
  },
  {
    label: '数据状态：',
    field: 'sjzt',
    type: 'select',
    // span: 24,
    options: [
      {
        label: '已更新',
        value: '1'
      },
      {
        label: '暂未更新',
        value: '0'
      }
    ]
  }
]
export default fields
// [
//   {
//     label: "姓名",
//     field: "username",
//     type: "input",
//     dataType: "string",
//     required: true,
//     validateTrigger: "blur",
//     // rules: [
//     //   {required: true, message: '请输入姓名', trigger: 'blur'}
//     // ],
//     hidden: ["view"]
//   },
//   {
//     label: "性别",
//     field: "sex",
//     type: "select",
//     required: true,
//     options: [
//       {
//         label: "男",
//         value: 0
//       },
//       {
//         label: "女",
//         value: 1
//       }
//     ]
//   },
//   {
//     label: "年龄",
//     field: "age",
//     type: "input",
//     dataType: "number"
//   }
// ];
