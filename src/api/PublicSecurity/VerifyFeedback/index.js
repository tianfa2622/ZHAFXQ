import axios from "@/utils/axios";

/**
 * 获取信息核实反馈表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get("/releaseevent/selectAll", {
    params: data
  });
}
