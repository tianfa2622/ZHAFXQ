import axios from "@/utils/axios";

export function getStaffProfile() {
  return axios.get("/index/queryRk", {
    params: {
      communityClinic: "1"
    }
  });
}
export function getqueryApe() {
  return axios.get("/index/queryApe", {
    params: {
      communityClinic: "1"
    }
  });
}
export function getqueryYj() {
  return axios.get("/index/queryYj", {
    params: {
      communityClinic: "1,1"
    }
  });
}
export function getqueryPatrolplan() {
  return axios.get("/index/queryPatrolplan", {
    params: {
      communityClinic: "1"
    }
  });
}
export function getqueryPerceptionwarning() {
  return axios.get("/index/queryPerceptionwarning", {
    params: {
      communityClinic: "1"
    }
  });
}
export function getqueryFwsyqk() {
  return axios.get("/index/queryFwsyqk", {
    params: {
      communityClinic: "1"
    }
  });
}
export function getqueryCl() {
  return axios.get("/index/queryCl", {
    params: {
      communityClinic: "1"
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
