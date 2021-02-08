import axios from "@/utils/axios";

/**
 * 获取人员异常表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getPersonnelAll(data) {
  return axios.get("/ryyc/selectAll", {
    params: data
  });
}

/**
 * 获取车辆异常表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getVehicleAll(data) {
  return axios.get("/clyc/selectAll", {
    params: data
  });
}
/**
 * 获取聚集异常表格信息
 * @param {object} data  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getGatherAll(data) {
  return axios.get("/jjyc/selectAll", {
    params: data
  });
}

/**
 * 获取人员异常表格单列信息
 * @param {string} id 查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getPersonnelOne(id) {
  return axios.get("/ryyc/selectOne", {
    params: {
      id: id
    }
  });
}

/**
 * 获取车辆异常表格单列信息
 * @param {string} id  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getVehicleOne(id) {
  return axios.get("/clyc/selectOne", {
    params: {
      id: id
    }
  });
}

/**
 * 获取聚集异常表格单列信息
 * @param {string} id  查询传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function getGatherOne(id) {
  return axios.get("/jjyc/selectOne", {
    params: {
      id: id
    }
  });
}

/**
 * 修改人员异常表格单列信息
 * @param {object} data  修改传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function putPersonnelupdate(data) {
  return axios.put("/ryyc/update", data);
}

/**
 * 修改车辆异常表格单列信息
 * @param {object} data  修改传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function putVehicleupdate(data) {
  return axios.put("/clyc/update", data);
}

/**
 * 修改聚集异常表格单列信息
 * @param {object} data  修改传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function putGatherupdate(data) {
  return axios.put("/jjyc/update", data);
}

/**
 * 增加人员异常表格数据
 * @param {object} data  添加传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function postPersonnelinsert(data) {
  return axios.post("/ryyc/insert", data);
}

/**
 * 增加车辆异常表格数据
 * @param {object} data  添加传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function postVehicleinsert(data) {
  return axios.post("/clyc/insert", data);
}

/**
 * 增加车辆异常表格数据
 * @param {object} data  添加传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function postGatherinsert(data) {
  return axios.post("/jjyc/insert", data);
}

/**
 * 删除人员异常单列表格数据
 * @param {object} data  删除传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function delectPersonnel(data) {
  return axios.delete("/ryyc/delete", {
    params: data
  });
}

/**
 * 删除车辆异常单列表格数据
 * @param {object} data  删除传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function delectVehicle(data) {
  return axios.delete("/clyc/delete", {
    params: data
  });
}

/**
 * 删除聚集异常单列表格数据
 * @param {object} data  删除传的值
 * @returns {import("axios").AxiosPromise.data}
 */
export function delectGather(data) {
  return axios.delete("/jjyc/delete", {
    params: data
  });
}
