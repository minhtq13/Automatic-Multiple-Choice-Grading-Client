// export const BASE_URL = "https://61fe8c59a58a4e00173c98cc.mockapi.io";
export const BASE_URL = "http://localhost:8000";

export const apiPath = {
  // Authentication
  login: BASE_URL + "/api/v1/auth/signin",
  register: BASE_URL + "/api/v1/auth/signup",
  refreshToken: BASE_URL + "/api/v1/auth/refresh-token",
  // Student
  allStudents: BASE_URL + "/api/v1/student/list",
  updateStudent: BASE_URL + "/api/v1/student/update/",
  addStudent: BASE_URL + "/api/v1/student/add",
  deleteStudent: BASE_URL + "/api/v1/student/disable/",
  exportStudents: BASE_URL + "api/v1/student/export",
  // AI
  getModelAI: BASE_URL + "/api/v1/test/mark-ai",
  //Teacher:
  allTeachers: BASE_URL + "/api/v1/teacher/list",
  updateTeacher: BASE_URL + "/api/v1/teacher/update/",
  addTeacher: BASE_URL + "/api/v1/teacher/add",
  deleteTeacher: BASE_URL + "/api/v1/teacher/disable/",
};
