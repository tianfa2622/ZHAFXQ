import axios from "@/utils/axios";

/**
 * 获取小区人员档案表格信息
 * @param {object} paramsData  rkdjlx人口登记类型(1常住, 2流动)
 * @returns {import("axios").AxiosPromise.data}
 */
export function getSelectAll(paramsData) {
  return axios.get("/personinfo/selectAll", {
    params: paramsData
  });
}
/**
 * 通过主键查询单条信息
 * @param {string} ryxxbz ryxxbz 人员信息标识
 * @returns {import ("axios").AxiosPromise.data}
 */
export function getSelectOne(ryxxbz) {
  return axios.get("/personinfo/selectOne", {
    params: {
      ryxxbz: ryxxbz
    }
  });
}
/**
 * 更新小区人员信息
 * @param {JSON} personinfo personinfo 小区人员信息
 *
 */
export function getUpdate(personinfo) {
  // let data = JSON.stringify(personinfo);
  // console.log(data);
  const data = {};
  for (const key in personinfo) {
    // if (key === "csrq" || key === "rjRq") {
    //   continue;
    // }
    data[key] = personinfo[key];
  }
  return axios.put("/personinfo/update", data);
}
/**
 * 更新小区人员信息
 * @param {JSON} personinfo personinfo 小区人员信息
 *
 */
export function getInsert(personinfo) {
  // let data = JSON.stringify(personinfo);
  // console.log(data);
  const data = {};
  for (const key in personinfo) {
    // if (key === "csrq" || key === "gxsj") {
    //   continue;
    // }
    data[key] = personinfo[key];
  }
  return axios.post("/personinfo/insert", data);
}
