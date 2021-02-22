import axios from '@/utils/axios'

/**
 * 获取访客登记信息
 * @param {object} paramsData 查询数据
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get('/visitorevent/selectAll', {
    params: paramsData
  })
}
/**
 * 通过主键查询访客登记信息
 * @param {string} fkdjxxbz 访客信息标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectOne(fkdjxxbz) {
  return axios.get('/visitorevent/selectOne', {
    params: {
      fkdjxxbz: fkdjxxbz
    }
  })
}
