import { getRequest, postRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";

// Đăng nhập
export const loginRequest = async (params, successCallback, errorCallback) => {
  await postRequest(apiPath.login, params, successCallback, errorCallback);
};

// Đăng ký
export const registerRequest = async (
  params,
  successCallback,
  errorCallback
) => {
  await postRequest(apiPath.register, params, successCallback, errorCallback);
};

// Refresh token
export const refreshTokenRequest = async (
  params,
  successCallback,
  errorCallback
) => {
  await postRequest(apiPath.refreshToken, params, successCallback, errorCallback);
};


export const getUserByToken = async (
  params,
  successCallback,
  errorCallback
) => {
  await getRequest(apiPath.getUser, params, successCallback, errorCallback);
};

export const logoutRequest = (params, successCallback, errorCallback) => {
  getRequest(apiPath.logout, params, successCallback, errorCallback);
};

