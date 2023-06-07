import { postRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";

// Chấm điểm từ AI
export const getModelAIService = async (params, successCallback, errorCallback) => {
  await postRequest(apiPath.getModelAI, params, successCallback, errorCallback);
};
