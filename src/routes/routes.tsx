import {RoutesInterface} from "../assets/interfaces/routes"
import {lazy} from "react";
import makeFullPath from "../utils/makeFullPath";

const MainPage = lazy(() => import("../pages/MainPage"));
const LoginPage = lazy(() => import("../pages/body/LoginPage"));
const RegisterPage = lazy(() => import("../pages/body/Register"));
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
        ]
    },
    {
        path: makeFullPath("/test"),
        element: <div>testing detachment page</div>,
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