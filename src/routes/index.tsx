import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Layout from "../layouts/MainLayout";
import NotFound from "../pages/not-found/NotFound";
import HomePage from "../pages/home/Home";
import PatternPage from "../pages/pattern-page/PatternPage";
import PracticePage from "../pages/practice-page/PracticePage";
import ReactPatternDetail from "../pages/reactjs-patters/ReactPatternDetail";
import { ROUTES } from "./routes";
import ReactPatternsPage from "../pages/reactjs-patters/ReactPattern";

// Define routes as constants

// Define router
const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.PATTERN_DETAIL,
        element: <PatternPage />,
      },
      {
        path: ROUTES.PRACTICE_DETAIL,
        element: <PracticePage />,
      },
      {
        path: ROUTES.REACT_PATTERNS,
        element: <ReactPatternsPage />,
      },
      {
        path: ROUTES.REACT_PATTERN_DETAIL,
        element: <ReactPatternDetail />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
