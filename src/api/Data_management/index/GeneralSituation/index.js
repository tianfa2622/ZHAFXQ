import axios from '@/utils/axios'

/**
 * 获取小区综合停车位信息
 * @param {object} paramsData  rkdjlx人口登记类型(1常住, 2流动)
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get('/parkingspaceinfo/selectAll', {
    params: paramsData
  })
}
/**
 * 获取小区综合停车位单列表格信息
 * @param {object} tcwxxbz  停车位信息标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectOne(tcwxxbz) {
  return axios.get('/parkingspaceinfo/selectOne', {
    params: {
      tcwxxbz: tcwxxbz
    }
  })
}
