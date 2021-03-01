import axios from '@/utils/axios'

/**
 * 获取门禁信息
 * @param {object} paramsData
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get('/doorinfo/selectAll', {
    params: paramsData
  })
}

/**
 * 添加门禁信息
 * @param {object} data
 *
 */
export function putupdate(data) {
  return axios.put('/doorinfo/update', data)
}
