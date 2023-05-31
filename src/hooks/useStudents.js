import { useState } from "react";
import { getAllStudentsService } from "../services/studentsService";
import useNotify from "./useNotify";

const useStudents = () => {
  const notify = useNotify();
  const [allStudents, setAllStudents] = useState([]);

  const getAllStudents = (payload = {}) => {
    getAllStudentsService(
      payload,
      (res) => {
        setAllStudents(res.data);
      },
      (err) => {
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
        if (err.response.status === 404) {
          notify.warning(
            err.response.data.message || "No information in database"
          );
        }
      }
    );
  };

  return {
    allStudents,
    getAllStudents,
  };
};

export default useStudents;
