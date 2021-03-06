import axios from "@/utils/axios";

/**
 * 获取异常设置信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectYcsz(data) {
  return axios.get("/ycsz/selectYcsz", {
    params: data
  });
}
// /**
//  * 获取日志表格单条信息
//  * @param {string} data  查询传的值
//  * @returns {import("axios").AxiosPromise.data}
//  */
// export function getSelectOne(data) {
//   return axios.get("/log/selectOne", {
//     params: {
//       id: data
//     }
//   });
// }
