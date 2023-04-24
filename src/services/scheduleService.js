import { getRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getInfoAllScheduleService = async (
  params,
  successCallback,
  errorCallback
) => {
  await getRequest(
    `${apiPath.getInfoAllSchedule}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
export const getInfoScheduleService = async (
  params,
  successCallback,
  errorCallback
) => {
  await getRequest(
    `${apiPath.getInfoSchedule}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
export const getInfoScheduleByNameCinemaService = async (
  params,
  successCallback,
  errorCallback
) => {
  await getRequest(
    `${apiPath.getInfoScheduleByNameCinema}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
