import axios from '@/utils/axios'

/**
 * 获取异常设置信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectYcsz(data) {
  return axios.get('/ycsz/selectYcsz', {
    params: data
  })
}

/**
 * 保存异常设置信息
 * @param {string} userId  操作用户id
 * @param {object} data  更改的值
 */
export function updateYcsz(userId, data) {
  return axios.put(`/ycsz/update?userId=${userId}`, data)
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
