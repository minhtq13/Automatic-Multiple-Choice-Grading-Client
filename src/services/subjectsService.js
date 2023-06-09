import { getRequest, postRequest, putRequest, deleteRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getAllSubjectsService = async (params, successCallback, errorCallback) => {
  await getRequest(`${apiPath.allSubjects}`, params, successCallback, errorCallback, 3000);
};
export const updateSubjectsService = async (subjectId, params, successCallback, errorCallback) => {
  await putRequest(
    `${apiPath.updateSubject}/${subjectId}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
export const addSubjectsService = async (params, successCallback, errorCallback) => {
  await postRequest(`${apiPath.addSubject}`, params, successCallback, errorCallback, 3000);
};
export const deleteSubjectsService = async (subjectId, params, successCallback, errorCallback) => {
  await deleteRequest(
    `${apiPath.deleteSubject}/${subjectId}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
