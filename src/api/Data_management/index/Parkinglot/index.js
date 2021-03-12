import axios from '@/utils/axios'

/**
 * 获取小区综合停车场信息
 * @param {object} paramsData
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get('/parkinginfo/selectAll', {
    params: paramsData
  })
}
/**
 * 获取小区综合停车场详情信息
 * @param {string} crkxxbz 停车场信息标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectOne(tccxxbz) {
  return axios.get('/parkinginfo/selectOne', {
    params: {
      tccxxbz: tccxxbz
    }
  })
}
/**
 * 获取小区综合停车场出入口信息
 * @param {object} paramsData  rkdjlx人口登记类型(1常住, 2流动)
 * @returns {import("axios").AxiosPromise.data}
 */
export function parkinggateinfo(paramsData) {
  return axios.get('/parkinggateinfo/selectAll', {
    params: paramsData
  })
}
