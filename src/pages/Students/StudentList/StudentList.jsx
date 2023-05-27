import React, { useEffect } from "react";
import useStudents from "../../../hooks/useStudents";
const StudentList = () => {
  const { allStudents, getAllStudents } = useStudents();
  useEffect(() => {
    // if (allStudents) {
    getAllStudents();
    // }
  });
  console.log(allStudents);
  return <div className="a-student-list">Student List</div>;
};
export default StudentList;
