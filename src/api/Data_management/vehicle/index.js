import axios from "@/utils/axios";

/**
 * 获取小区车辆机动车档案表格信息
 * @param {object} data
 * @returns {import("axios").AxiosPromise.data}
 */
export function getMotorSelectAll(data) {
  return axios.get("/parkingmotorvehiclesinfo/selectAll", {
    params: data
  });
}
/**
 * 获取小区车辆电动车档案表格信息
 * @param {object} data
 * @returns {import("axios").AxiosPromise.data}
 */
export function getElectricSelectAll(data) {
  return axios.get("/electricbicycleinfo/selectAll", {
    params: data
  });
}
/**
 * 获取小区车辆电动车档案表格单列信息
 * @param {object} ddzxcxxbz 电动自行车信息标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getElectricSelectOne(ddzxcxxbz) {
  return axios.get("/electricbicycleinfo/selectOne", {
    params: {
      ddzxcxxbz: ddzxcxxbz
    }
  });
}
/**
 * 获取小区车辆机动车档案表格单列信息
 * @param {object} jdcxxbz  机动车信息标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getMotorSelectOne(jdcxxbz) {
  return axios.get("/parkingmotorvehiclesinfo/selectOne", {
    params: {
      jdcxxbz: jdcxxbz
    }
  });
}

/**
 * 编辑小区车辆机动车档案表格单列信息
 * @param {object} data  修改的数据
 * @returns {import("axios").AxiosPromise.data}
 */
export function putMotorUpdate(data) {
  return axios.put("/parkingmotorvehiclesinfo/update", data);
}
/**
 * 编辑小区车辆电动车档案表格单列信息
 * @param {object} data 修改的数据
 * @returns {import("axios").AxiosPromise.data}
 */
export function putElectricUpdate(data) {
  return axios.put("/electricbicycleinfo/update", data);
}
