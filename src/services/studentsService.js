import { getRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getAllStudentsService = async (params, successCallback, errorCallback) => {
  await getRequest(`${apiPath.allStudents}`, params, successCallback, errorCallback, 3000);
};
