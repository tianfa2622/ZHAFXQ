import axios from "@/utils/axios";

export function getStaffProfile(communityClinic) {
  return axios.get("/api/index/queryRK", {
    params: {
      communityClinic
    }
  });
}
export function getselectAll() {
  return axios.get("/api/apestatus/selectAll");
}
