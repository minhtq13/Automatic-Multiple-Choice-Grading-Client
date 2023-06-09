import { useState } from "react";
import useNotify from "./useNotify";
import { getAllSubjectsService } from "../services/subjectsService";

const useSubjects = () => {
  const notify = useNotify();
  const [allSubjects, setAllSubjects] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);

  const getAllSubjects = (payload = {}) => {
    getAllSubjectsService(
      payload,
      (res) => {
        setAllSubjects(res.data);
        setTableLoading(false);
      },
      (err) => {
        setTableLoading(true);
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
    allSubjects,
    getAllSubjects,
    tableLoading,
  };
};

export default useSubjects;
