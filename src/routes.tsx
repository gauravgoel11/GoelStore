import { RouteObject } from "react-router-dom";
import HomePage from "./pages/index";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];

export default routes;
