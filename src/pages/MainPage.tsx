import React, {JSX} from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

const MainPage = (): JSX.Element => {
    const loc = useLocation();

    return <>
        <div className="flex flex-col h-full">
            <div>
                <span className="pr-5">
                    <Link to="/">Main</Link>
                </span>
                <span className="pr-5">
                    <Link to="/register">Register</Link>
                </span>
                <span>
                    <Link to="/login">Login</Link>
                </span>
            </div>
            <div className="flex-1">
                {loc.pathname === "/" ? <>Main</> : <Outlet/>}
            </div>
            <div>footer</div>
        </div>
    </>;
}

export default MainPage;