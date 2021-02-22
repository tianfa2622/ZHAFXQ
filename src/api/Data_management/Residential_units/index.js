import axios from '@/utils/axios'

/**
 * 获取小区单位表格数据
 * @param {object} data
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get('/companyinfo/selectAll', {
    params: data
  })
}
/**
 * 获取小区单位表格每列数据
 * @param {object} data  通过主键查询
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectOne(data) {
  return axios.get('/companyinfo/selectOne', {
    params: data
  })
}
/**
 * 编辑表格每列数据
 * @param {object} housingodata
 * @returns {import("axios").AxiosPromise.data}
 */
export function PutUpdate(housingodata) {
  // const data = {};
  // for (const key in housingodata) {
  //   if (key === "dqjd" || key === "dqwd" || key === "jzMjpfm") {
  //     continue;
  //   }
  //   data[key] = housingodata[key];
  // }

  return axios.put('/companyinfo/update', housingodata)
}
/**
 * 添加单位数据
 * @param {object} housingodata
 * @returns {import("axios").AxiosPromise.data}
 */
export function PostInsert(housingodata) {
  // const data = {};
  // for (const key in housingodata) {
  //   if (key === "dqjd" || key === "dqwd" || key === "jzMjpfm") {
  //     continue;
  //   }
  //   data[key] = housingodata[key];
  // }

  return axios.post('/companyinfo/insert', housingodata)
}
// /**
//  * 获取小区车辆档案表格信息
//  * @param {object} data  rkdjlx人口登记类型(1常住, 2流动)
//  * @returns {import("axios").AxiosPromise.data}
//  */
// export function getSelectAll(data) {
//   return axios.get("/houseinfo/selectAll", {
//     params: {
//       fwlbdm: data.fwlbdm,
//       fzGMsfzhm: data.fzGMsfzhm
//     }
//   });
// }
