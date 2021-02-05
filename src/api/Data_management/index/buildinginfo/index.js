import axios from "@/utils/axios";

/**
 * 获取楼栋信息
 * @param {object} paramsData  rkdjlx人口登记类型(1常住, 2流动)
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get("/buildinginfo/selectAll", {
    params: paramsData
  });
}
/**
 * 获取楼栋表格单列信息
 * @param {string} ldxxbz  楼栋信息标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectOne(ldxxbz) {
  return axios.get("/buildinginfo/selectOne", {
    params: {
      ldxxbz: ldxxbz
    }
  });
}
