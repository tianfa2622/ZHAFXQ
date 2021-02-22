import axios from '@/utils/axios'

/**
 * 获取人口分析表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get('/rkfx/selectAll', {
    params: data
  })
}
