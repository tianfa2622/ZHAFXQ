import axios from "@/utils/axios";

/**
 * 获取巡查预案表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get("/patrolplan/selectAll", {
    params: data
  });
}

/**
 * 获取感知预警表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getGZSelectAll(data) {
  return axios.get("/perceptionwarning/selectAll", {
    params: data
  });
}
// /**
//  * 获取单列表格数据
//  * @param {object} data  查询传的值
//  * @returns {import("axios").AxiosPromise.data}
//  */
// export function getSelectAll(data) {
//   return axios.get("/perceptionwarning/selectAll", {
//     params: data
//   });
// }
