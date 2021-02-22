import axios from '@/utils/axios'

/**
 * 获取重点人员表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getPersonnelAll(data) {
  return axios.get('/keypersoninfo/selectAll', {
    params: data
  })
}
/**
 * 获取重点车辆表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getVehicleAll(data) {
  return axios.get('/focusVehicle/selectAll', {
    params: data
  })
}
/**
 * 获取重点人员表格信息
 * @param {string} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getPersonnelOne(data) {
  return axios.get('/keypersoninfo/selectOne', {
    params: {
      zdryxxbz: data
    }
  })
}
/**
 * 获取重点车辆表格信息
 * @param {string} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getVehicleOne(data) {
  return axios.get('/focusVehicle/selectOne', {
    params: {
      zdclxxbs: data
    }
  })
}
