import {RoutesInterface} from "../assets/interfaces/routes"
import {lazy} from "react";
import makeFullPath from "../utils/makeFullPath";
import {STAR, ROOT, LOGIN, REGISTER, USER, ACCESS_DENIED} from "./routes.list";

const MainPage = lazy(() => import("../pages/MainPage"));
const LoginPage = lazy(() => import("../pages/body/LoginPage"));
const RegisterPage = lazy(() => import("../pages/body/Register"));
const UserDashboardPage = lazy(() => import("../pages/body/UserDashboard"));
const AccessDeniedPage = lazy(() => import("../pages/dist/404"));
const NotFoundPage = lazy(() => import("../pages/dist/NotFoundPage"));

const routeItems: Array<RoutesInterface> = [
    {
        path: makeFullPath(ROOT),
        element: <MainPage/>,
        redirect: makeFullPath(ROOT),
        caseSensitive: false,
        needAuthenticating: false,
        children: [
            {
                path: makeFullPath(LOGIN),
                element: <LoginPage/>
            },
            {
                path: makeFullPath(REGISTER),
                element: <RegisterPage/>
            },
            {
                path: makeFullPath(USER),
                element: <UserDashboardPage/>,
                needAuthenticating: true
            }
        ]
    },
    {
        path: makeFullPath(ACCESS_DENIED),
        element: <AccessDeniedPage/>,
        redirect: makeFullPath(ROOT),
        caseSensitive: false,
        needAuthenticating: false
    },
    {
        path: makeFullPath(STAR),
        element: <NotFoundPage/>,
        redirect: makeFullPath(ROOT),
        caseSensitive: false,
        needAuthenticating: false
    }
];

export default routeItems;