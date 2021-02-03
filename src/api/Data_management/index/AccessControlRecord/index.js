import axios from "@/utils/axios";

/**
 * 获取门禁记录信息
 * @param {object} paramsData  rkdjlx人口登记类型(1常住, 2流动)
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get("/doorevent/selectAll", {
    params: paramsData
  });
}

/**
 * 获取门禁记录单列信息
 * @param {object} paramsData  rkdjlx人口登记类型(1常住, 2流动)
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectOne(paramsData) {
  return axios.get("/doorevent/selectOne", {
    params: paramsData
  });
}
