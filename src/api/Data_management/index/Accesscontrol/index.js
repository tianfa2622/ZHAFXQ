import axios from "@/utils/axios";

/**
 * 获取门禁信息
 * @param {object} paramsData  rkdjlx人口登记类型(1常住, 2流动)
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get("/doorinfo/selectAll", {
    params: paramsData
  });
}
