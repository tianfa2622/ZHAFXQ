import axios from '@/utils/axios'

/**
 * 获取巡查预案表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get('/patrolplan/selectAll', {
    params: data
  })
}

/**
 * 获取感知预警表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getGZSelectAll(data) {
  return axios.get('/perceptionwarning/selectAll', {
    params: data
  })
}
/**
 * 获取单列巡查预警表格数据
 * @param {string} xcyaxxbz  获取传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectOne(xcyaxxbz) {
  return axios.get('/patrolplan/selectOne', {
    params: {
      xcyaxxbz: xcyaxxbz
    }
  })
}
/**
 * 获取单列感知预警表格数据
 * @param {string} gzyjxxbz  获取传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getGZSelectOne(gzyjxxbz) {
  return axios.get('/perceptionwarning/selectOne', {
    params: {
      gzyjxxbz: gzyjxxbz
    }
  })
}

/**
 * 修改单列感知预警表格数据
 * @param {object} data  更新的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function putGZUpdate(data) {
  return axios.put('/perceptionwarning/update', data)
}

/**
 * 修改单列巡查预警表格数据
 * @param {object} data  更新的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function putUpdate(data) {
  return axios.put('/patrolplan/update', data)
}

/**
 * 添加感知预警表格数据
 * @param {object} data  更新的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function addGZInsert(data) {
  return axios.post('/perceptionwarning/insert', data)
}

/**
 * 添加巡查预警表格数据
 * @param {object} data  更新的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function addInsert(data) {
  return axios.post('/patrolplan/insert', data)
}
