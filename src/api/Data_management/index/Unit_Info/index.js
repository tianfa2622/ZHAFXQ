import axios from "@/utils/axios";

/**
 * 获取楼栋单元信息
 * @param {object} paramsData  rkdjlx人口登记类型(1常住, 2流动)
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get("/unitinfo/selectAll", {
    params: paramsData
  });
}
/**
 * 获取楼栋单元信息
 * @param {object} dyxxbz  单元信息标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectOne(dyxxbz) {
  return axios.get("/unitinfo/selectOne", {
    params: {
      dyxxbz: dyxxbz
    }
  });
}
