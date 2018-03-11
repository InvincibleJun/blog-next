import request from "../utils/request";

export const sendMail = data => {
  return request("/api/user/sendMail", { method: "POST", data });
};