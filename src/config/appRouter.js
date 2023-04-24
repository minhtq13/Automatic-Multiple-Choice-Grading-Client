import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import { appPath } from "./appPath";

const publicRoutes = [
  { path: appPath.notFound, component: NotFound },
  { path: appPath.default, component: Home },

  // private routes

  // { path: appPath.movieChair, component: MovieChair },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
