import axios from "@/utils/axios";

/**
 * 获取小区人员档案表格信息
 * @param {object} data  rkdjlx人口登记类型(1常住, 2流动)
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get("/personinfo/selectAll", {
    params: {
      rkdjlx: data.rkdjlx,
      xm: data.xm,
      xqxxbz: data.xqxxbz,
      zjhm: data.zjhm
    }
  });
}
/**
 * 通过主键查询单条信息
 * @param {string} ryxxbz ryxxbz 人员信息标识
 * @returns {import ("axios").AxiosPromise.data}
 */
export function getselectOne(ryxxbz) {
  return axios.get("/personinfo/selectOne", {
    params: {
      ryxxbz: ryxxbz
    }
  });
}
