import Detail from "../pages/detail";
import Favorite from "../pages/favorite";
import Home from "../pages/home";
import Play from "../pages/play";
import Search from "../pages/search";
import User from "../pages/user";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/play", component: Play },
  { path: "/search", component: Search },
  { path: "/detail", component: Detail },
  { path: "/user", component: User },
  { path: "/favorite", component: Favorite, layout: null },
];
export { publicRoutes };
