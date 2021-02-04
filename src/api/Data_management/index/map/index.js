import axios from "@/utils/axios";

/**
 * 获取小区综合信息
 * @param {object} paramsData  传值的参数 所属地区 小区姓名
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get("/villageinfo/selectAll", {
    params: paramsData
  });
}
