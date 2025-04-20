import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
} from "react-router-dom";
import App from "../App";
import { Abibas } from "../components/pages/Abibas";
import { Adidas } from "../components/pages/Adidas";
import { Error404 } from "../components/pages/Error404";
import { Prices } from "../components/pages/Prices";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { Puma } from "../components/pages/Puma";
import { Login } from "./../components/pages/Login";
import { Model } from "./../components/pages/Model";
import { ProtectedRoute } from "./ProtectedRoute";

const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICES: "/prices",
  MODEL: "/:model/:id",
  ERROR: "/error",
  Login: "/login",
} as const;

//publick route
const publicRoutes: RouteObject[] = [
  {
    path: PATH.ADIDAS,
    element: <Adidas />,
  },
  {
    path: PATH.PUMA,
    element: <Puma />,
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas />,
  },
  {
    path: PATH.PRICES,
    element: <Prices />,
  },
  {
    path: PATH.MODEL,
    element: <Model />,
  },
  {
    path: PATH.ERROR,
    element: <Error404 />,
  },
  {
    path: PATH.Login,
    element: <Login />,
  },
];
const privteERoutes: RouteObject[] = [
  {
    path: "/protected",
    element: <ProtectedPage />,
  },
];

export const PrivateRoutes = () => {
  const isAuth = false; // Измените это значение в зависимости от логики аутентификации

  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR} />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privteERoutes,
      },
      ...publicRoutes,
    ],
  },

  /*   <Route path={'/:model/:id'} element={<Model/>}/> */
]);

////////////
/* import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../App";
import { Abibas } from "../components/pages/Abibas";
import { Adidas } from "../components/pages/Adidas";
import { Error404 } from "../components/pages/Error404";
import { Prices } from "../components/pages/Prices";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { Puma } from "../components/pages/Puma";
import { Login } from "./../components/pages/Login";
import { Model } from "./../components/pages/Model";
import { ProtectedRoute } from "./ProtectedRoute";

const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICES: "/prices",
  MODEL: "/:model/:id",
  ERROR: "/error",
  Login: "/login",
} as const;

//publick route
const publickRoutes: RouteObject[] = [
  {
    path: PATH.ADIDAS,
    element: <Adidas />,
  },
  {
    path: PATH.PUMA,
    element: <Puma />,
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas />,
  },
  {
    path: PATH.PRICES,
    element: <Prices />,
  },
  {
    path: PATH.MODEL,
    element: <Model />,
  },
  {
    path: PATH.ERROR,
    element: <Error404 />,
  },
  {
    path: PATH.Login,
    element: <Login />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR} />,
    children: [
      {
        path: PATH.ADIDAS,
        element: <Adidas />,
      },
      {
        path: PATH.PUMA,
        element: <Puma />,
      },
      {
        path: PATH.ABIBAS,
        element: <Abibas />,
      },
      {
        path: PATH.PRICES,
        element: <Prices />,
      },
      {
        path: PATH.MODEL,
        element: <Model />,
      },
      {
        path: "/protected",
        element: (
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.ERROR,
        element: <Error404 />,
      },
      {
        path: PATH.Login,
        element: <Login />,
      },
    ],
  },


]);
 */
