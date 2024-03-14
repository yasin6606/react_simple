import React, {Suspense} from 'react';
import {RouterProvider} from "react-router-dom";
import Routes from "./routes/routes";
import Loading from "./pages/dist/Loading";

function App() {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <RouterProvider router={Routes}/>
            </Suspense>
        </>
    );
}

export default App;