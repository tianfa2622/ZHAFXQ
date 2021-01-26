import axios from "@/utils/axios";

/**
 * 获取小区车辆档案表格信息
 * @param {object} data
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get("/parkingmotorvehiclesinfo/selectAll", {
    params: {
      czXM: data.czXM,
      jdchphm: data.jdchphm
    }
  });
}
