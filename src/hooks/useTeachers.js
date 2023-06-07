import { useState } from "react";
import useNotify from "./useNotify";
import { getAllTeachersService } from "../services/teachersServices";

const useTeachers = () => {
  const notify = useNotify();
  const [allTeachers, setAllTeachers] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);

  const getAllTeachers = (payload = {}) => {
    getAllTeachersService(
      payload,
      (res) => {
        setAllTeachers(res.data);
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
    allTeachers,
    getAllTeachers,
    tableLoading,
  };
};

export default useTeachers;
