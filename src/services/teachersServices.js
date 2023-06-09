import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getAllTeachersService = async (
  params,
  successCallback,
  errorCallback
) => {
  await getRequest(
    `${apiPath.allTeachers}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
export const updateTeachersService = async (
  teacherId,
  params,
  successCallback,
  errorCallback
) => {
  await putRequest(
    `${apiPath.updateTeacher}/${teacherId}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
export const addTeachersService = async (
  params,
  successCallback,
  errorCallback
) => {
  await postRequest(
    `${apiPath.addTeacher}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
export const deleteTeachersService = async (
  teacherId,
  params,
  successCallback,
  errorCallback
) => {
  await deleteRequest(
    `${apiPath.deleteTeacher}/${teacherId}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
