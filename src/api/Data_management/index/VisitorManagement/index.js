import axios from "@/utils/axios";

/**
 * 获取访客登记信息
 * @param {object} paramsData
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get("/visitorevent/selectAll", {
    params: paramsData
  });
}
