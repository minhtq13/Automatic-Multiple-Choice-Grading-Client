import Home from "../pages/Home/Home";
import StudentDashboard from "../pages/Dashboard/StudentDashboard/StudentDashboard";
import NotFound from "../pages/NotFound";
import { appPath } from "./appPath";
import TeacherDashboard from "../pages/Dashboard/TeacherDashboard/TeacherDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import StudentAdd from "../pages/Students/StudentAdd/StudentAdd";
import StudentEdit from "../pages/Students/StudentEdit/StudentEdit";
import StudentList from "../pages/Students/StudentList/StudentList";
import StudentView from "../pages/Students/StudentView/StudentView";
import TeacherEdit from "../pages/Teachers/TeacherEdit/TeacherEdit";
import TeacherList from "../pages/Teachers/TeacherList/TeacherList";
import TeacherAdd from "../pages/Teachers/TeacherAdd/TeacherAdd";
import TeacherView from "../pages/Teachers/TeacherView/TeacherView";
import DepartmentAdd from "../pages/Departments/DepartmentAdd/DepartmentAdd";
import DepartmentEdit from "../pages/Departments/DepartmentEdit/DepartmentEdit";
import DepartmentList from "../pages/Departments/DepartmentList/DeparrtmentList";
import SubjectEdit from "../pages/Subjects/SubjectEdit/SubjectEdit";
import SubjectAdd from "../pages/Subjects/SubjectAdd/SubjectAdd";
import SubjectList from "../pages/Subjects/SubjectList/SubjectList";
import ExamList from "../pages/ExamList/ExamList";
import Library from "../pages/Library/Library";
import AddBlog from "../pages/Blogs/AddBlog/AddBlog";
import AllBlogs from "../pages/Blogs/AllBlogs/AllBlogs";
import EditBlog from "../pages/Blogs/EditBlog/EditBlog";
import TimeTable from "../pages/TimeTable/TimeTable";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const publicRoutes = [
	{ path: appPath.notFound, component: NotFound },
	{ path: appPath.default, component: Home },
	{ path: appPath.studentDashboard, component: StudentDashboard },
	{ path: appPath.teacherDashboard, component: TeacherDashboard },
	{ path: appPath.adminDashboard, component: AdminDashboard },
	{ path: appPath.studentAdd, component: StudentAdd },
	{ path: appPath.studentEdit, component: StudentEdit },
	{ path: appPath.studentList, component: StudentList },
	{ path: appPath.studentView, component: StudentView },
	{ path: appPath.teacherEdit, component: TeacherEdit },
	{ path: appPath.teacherList, component: TeacherList },
	{ path: appPath.teacherAdd, component: TeacherAdd },
	{ path: appPath.teacherView, component: TeacherView },
	{ path: appPath.departmentAdd, component: DepartmentAdd },
	{ path: appPath.departmentEdit, component: DepartmentEdit },
	{ path: appPath.departmentList, component: DepartmentList },
	{ path: appPath.subjectEdit, component: SubjectEdit },
	{ path: appPath.subjectAdd, component: SubjectAdd },
	{ path: appPath.subjectList, component: SubjectList },
	{ path: appPath.examList, component: ExamList },
	{ path: appPath.library, component: Library },
	{ path: appPath.addBlog, component: AddBlog },
	{ path: appPath.allBlogs, component: AllBlogs },
	{ path: appPath.editBlog, component: EditBlog },
	{ path: appPath.timeTable, component: TimeTable },
	{
		path: appPath.login,
		component: Login,
		layout: "SignLayout",
		// isPrivateRouter: true,
	},
	{
		path: appPath.register,
		component: Register,
		layout: "SignLayout",
		// isPrivateRouter: true,
	},
	// private routes

	// { path: appPath.movieChair, component: MovieChair },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
