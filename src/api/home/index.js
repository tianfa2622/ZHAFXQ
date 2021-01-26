import axios from "@/utils/axios";

/**
 * 获取人员概况数据
 * @param {string} communityClinic 权限标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getStaffProfile(communityClinic) {
  return axios.get("/index/queryRk", {
    params: {
      communityClinic
    }
  });
}
/**
 * 获取设备信息
 * @param {string} communityClinic 权限标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getqueryApe(communityClinic) {
  return axios.get("/index/queryApe", {
    params: {
      communityClinic
    }
  });
}
/**
 * 查询预警类型
 * @param {string} communityClinic 权限标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getqueryYj(communityClinic) {
  return axios.get("/index/queryYj", {
    params: {
      communityClinic
    }
  });
}
/**
 * 查询巡查预警
 * @param {string} communityClinic 权限标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getqueryPatrolplan(communityClinic) {
  return axios.get("/index/queryPatrolplan", {
    params: {
      communityClinic
    }
  });
}
/**
 * 查询感知预警
 * @param {string} communityClinic 权限标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getqueryPerceptionwarning(communityClinic) {
  return axios.get("/index/queryPerceptionwarning", {
    params: {
      communityClinic
    }
  });
}
/**
 * 查询房屋使用情况
 * @param {string} communityClinic 权限标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getqueryFwsyqk(communityClinic) {
  return axios.get("/index/queryFwsyqk", {
    params: {
      communityClinic
    }
  });
}
/**
 * 查询车辆类型
 * @param {string} communityClinic 权限标识
 * @returns {import("axios").AxiosPromise.data}
 */
export function getqueryCl(communityClinic) {
  return axios.get("/index/queryCl", {
    params: {
      communityClinic
    }
  });
}
// export function queryByMap() {
//   return axios.get("/index/queryByMap", {
//     params: {
//       communityClinic: "1"
//     }
//   });
// }
