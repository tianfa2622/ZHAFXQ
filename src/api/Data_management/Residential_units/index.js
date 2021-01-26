import axios from "@/utils/axios";

/**
 * 获取小区单位档案表格信息
 * @param {object} data
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(data) {
  return axios.get("/companyinfo/selectAll", {
    params: data
  });
}
// {
//   dwmc: data.czXM,
//     tyshxydm: data.jdchphm,
//       wtdlrXM: data.jdchphm
// }
