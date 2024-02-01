import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes/routes";
import RouteSwitch from "./routes/RouteSwitch";

function App() {
    return (
        <>
            <BrowserRouter>
                <RouteSwitch routesList={Routes}/>
            </BrowserRouter>
        </>
    );
}

export default App;
