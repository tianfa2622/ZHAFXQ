import axios from "@/utils/axios";

/**
 * 获取态势分析时间分类信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getTimeSelectAll(data) {
  return axios.get("/tsfxKsh/selectAll", {
    params: data
  });
}
/**
 * 获取态势分析区域分类信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getAreaSelectAll(data) {
  return axios.get("/queryByArea", {
    params: data
  });
}
