import axios from '@/utils/axios'

/**
 * 获取小区综合表格数据
 * @param {object} data
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get('/personinfo/selectComPersons', {
    params: data
  })
}
