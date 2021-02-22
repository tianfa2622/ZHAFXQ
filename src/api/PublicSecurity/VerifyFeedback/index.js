import axios from '@/utils/axios'

/**
 * 获取信息核实反馈表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get('/releaseevent/selectAll', {
    params: data
  })
}

/**
 * 获取信息核实反馈表格单列信息
 * @param {string} xxfbsjxxbz  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectOne(xxfbsjxxbz) {
  return axios.get('/releaseevent/selectOne', {
    params: {
      xxfbsjxxbz: xxfbsjxxbz
    }
  })
}

/**
 * 新增核实反馈信息
 * @param {object} data  添加的数据
 *
 */
export function postInsert(data) {
  return axios.post('/releaseevent/insert', data)
}
