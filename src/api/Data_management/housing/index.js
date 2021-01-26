import axios from "@/utils/axios";

/**
 * 获取小区车辆档案表格信息
 * @param {object} data  rkdjlx人口登记类型(1常住, 2流动)
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get("/houseinfo/selectAll", {
    params: {
      fwlbdm: data.fwlbdm,
      fzGMsfzhm: data.fzGMsfzhm
    }
  });
}
