import React, {JSX} from "react";
import {Link, Outlet} from "react-router-dom";

const MainPage = (): JSX.Element => {

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
                <Outlet/>
            </div>
            <div>footer</div>
        </div>
    </>;
}

export default MainPage;