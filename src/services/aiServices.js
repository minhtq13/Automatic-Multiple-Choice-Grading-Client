import { getRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";

// Chấm điểm từ AI
export const getModelAIService = async (params, successCallback, errorCallback) => {
  await getRequest(apiPath.getModelAI, params, successCallback, errorCallback);
};
