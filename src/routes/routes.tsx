import {lazy} from "react";
import makeFullPath from "../utils/makeFullPath";
import {STAR, ROOT, LOGIN, REGISTER, USER, ACCESS_DENIED} from "./routes.list";
import {createBrowserRouter, RouteObject} from "react-router-dom";

const MakePrivate = lazy(() => import("../routes/MakePrivate"));
const MainPage = lazy(() => import("../pages/MainPage"));
const LoginPage = lazy(() => import("../pages/body/LoginPage"));
const RegisterPage = lazy(() => import("../pages/body/Register"));
const UserDashboardPage = lazy(() => import("../pages/body/UserDashboard"));
const AccessDeniedPage = lazy(() => import("../pages/dist/404"));
const NotFoundPage = lazy(() => import("../pages/dist/NotFoundPage"));
const RoutingErrorPage = lazy(() => import("../pages/dist/RoutingError"));

let routeObjects: Array<RouteObject> = [
    {
        id: ROOT,
        path: makeFullPath(ROOT),
        element: <MainPage/>,
        ErrorBoundary: RoutingErrorPage,
        children: [
            {
                id: LOGIN,
                path: makeFullPath(LOGIN),
                element: <LoginPage/>,
                ErrorBoundary: RoutingErrorPage,
            },
            {
                id: REGISTER,
                path: makeFullPath(REGISTER),
                element: <RegisterPage/>,
                ErrorBoundary: RoutingErrorPage,
            },
            {
                id: USER,
                path: makeFullPath(USER),
                element: <MakePrivate children={<UserDashboardPage/>}/>,
                hasErrorBoundary: true,
                ErrorBoundary: RoutingErrorPage,
                errorElement: <RoutingErrorPage/>,
            }
        ]
    },
    {
        path: makeFullPath(ACCESS_DENIED),
        element: <AccessDeniedPage/>,
        ErrorBoundary: RoutingErrorPage,
        caseSensitive: false,
    },
    {
        path: makeFullPath(STAR),
        element: <NotFoundPage/>,
        ErrorBoundary: RoutingErrorPage,
        caseSensitive: false,
    }
];

export default createBrowserRouter(routeObjects);