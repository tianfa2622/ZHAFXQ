import axios from '@/utils/axios'

/**
 * 获取设备信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get('/ape/selectAll', {
    params: data
  })
}
