import React, {Suspense, FunctionComponent, JSX} from "react";
import {RoutesInterface} from "../assets/interfaces/routes";
import {RouteObject, useRoutes} from "react-router-dom";
import Loading from "../pages/dist/Loading";

const RouteSwitch: FunctionComponent<any> = (props: { routesList: RoutesInterface[] }): JSX.Element => {
    const routes: RouteObject[] = props.routesList.map(r => ({...r}));

    const route = useRoutes(routes);

    return <>
        <Suspense fallback={<Loading/>} children={route}/>
    </>;
}

export default RouteSwitch;