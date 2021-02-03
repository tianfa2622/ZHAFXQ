import axios from "@/utils/axios";

/**
 * 获取小区综合信息
 * @param {object} paramsData  rkdjlx人口登记类型(1常住, 2流动)
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get("/villageinfo/selectAll", {
    params: paramsData
  });
}
