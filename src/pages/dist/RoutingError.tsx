import React, {JSX} from "react";
import {useLocation} from "react-router-dom";

const RoutingError = (): JSX.Element => {
    const loc = useLocation();

    console.log("loc: ", loc);

    return <>
        <p>Error in: {loc.pathname}</p>
    </>
}

export default RoutingError;