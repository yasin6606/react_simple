import {RoutesInterface} from "../assets/interfaces/routes"
import {lazy} from "react";
import makeFullPath from "../utils/makeFullPath";

const MainPage = lazy(() => import("../pages/MainPage"));
const LoginPage = lazy(() => import("../pages/body/LoginPage"));
const RegisterPage = lazy(() => import("../pages/body/Register"));
const UserDashboardPage = lazy(() => import("../pages/body/UserDashboard"));
const AccessDeniedPage = lazy(() => import("../pages/dist/404"));
const NotFoundPage = lazy(() => import("../pages/dist/NotFoundPage"));

const routeItems: Array<RoutesInterface> = [
    {
        path: makeFullPath("/"),
        element: <MainPage/>,
        redirect: makeFullPath("/"),
        caseSensitive: false,
        needAuthenticating: false,
        children: [
            {
                path: makeFullPath("/login"),
                element: <LoginPage/>
            },
            {
                path: makeFullPath("/register"),
                element: <RegisterPage/>
            },
            {
                path: makeFullPath("/user"),
                element: <UserDashboardPage/>,
                needAuthenticating: true
            }
        ]
    },
    {
        path: makeFullPath("/404"),
        element: <AccessDeniedPage/>,
        redirect: makeFullPath("/"),
        caseSensitive: false,
        needAuthenticating: false
    },
    {
        path: makeFullPath("*"),
        element: <NotFoundPage/>,
        redirect: makeFullPath("/"),
        caseSensitive: false,
        needAuthenticating: false
    }
];

export default routeItems;