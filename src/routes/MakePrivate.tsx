import React, {FunctionComponent, JSX, PropsWithChildren, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {LOGIN} from "./routes.list";

const MakePrivate: FunctionComponent<PropsWithChildren> = ({children}): JSX.Element => {
    const navigate = useNavigate();
    const auth = sessionStorage.getItem("userToken");

    useEffect(() => {
        console.log(auth);

        if (!auth) navigate(LOGIN, {replace: true});
    }, [navigate, auth]);

    return <>{children}</>;
};

export default MakePrivate;