import React, {JSX, useEffect} from "react";
import AxiosReq from "../../utils/apis";

const LoginPage = (): JSX.Element => {

    useEffect(() => {
        const data = {
            firstname: "Yas",
            lastname: "Go",
            phoneNumber: "09178",
            email: "q@q.com",
            password: "123123123"
        };

        // (async () => {
        //     const api = await AxiosReq.registerUser(data);
        //
        //     console.log(api);
        // })();

        localStorage.setItem("local", "asd");
        sessionStorage.setItem("Test", "asd");
    }, []);

    return <>
        <div className="flex justify-center h-full">
            <div className="flex flex-col justify-center">
                <div className="border rounded p-2">
                    <div className="pb-1">
                        <h3>Login</h3>
                    </div>
                    <div className="flex flex-col">
                        <div className="py-1">
                            <input type="text" placeholder="username"/>
                        </div>
                        <div className="py-1">
                            <input type="password" placeholder="password"/>
                        </div>
                    </div>
                    <div className="flex justify-around pt-1">
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default LoginPage;