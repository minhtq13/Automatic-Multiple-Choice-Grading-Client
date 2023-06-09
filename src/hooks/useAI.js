import { useState } from "react";
import { getModelAIService } from "../services/aiServices";
import useNotify from "./useNotify";

const useAI = () => {
  const notify = useNotify();
  const [resultAI, setResultAI] = useState();
  const [loading, setLoading] = useState(false);

  const getModelAI = (payload = {}) => {
    setLoading(true);
    getModelAIService(
      payload,
      (res) => {
        setLoading(false);
        setResultAI(res.data);
        console.log(res.data);
      },
      (err) => {
        setLoading(false);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
        if (err.response.status === 404) {
          notify.warning(err.response.data.message || "No information in database");
        }
      }
    );
  };

  return {
    resultAI,
    getModelAI,
    loading,
  };
};

export default useAI;
