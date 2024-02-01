import React, {ChangeEvent, JSX, useEffect, useState} from "react";
import AxiosReq from "../../utils/apis";
import {IRegInputs, IRegUser} from "../../assets/interfaces/register.interface";
import BtnGreen from "../../components/buttons/BtnGreen";
import {Link, useNavigate} from "react-router-dom";

const LoginPage = (): JSX.Element => {

    const [inputs, setInputs] = useState<IRegInputs[]>([]);
    const [info, setInfo] = useState<IRegUser>();
    const [loginFailed, setLoginFailed] = useState<boolean>(false);

    const navigate = useNavigate();

    const inpHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setInfo(prev => ({...prev, [name]: value} as IRegUser));
    };

    const loginHandler = async () => {
        try {
            const userToken = await AxiosReq.loginToken(info);
            setLoginFailed(false);

            // @ts-ignore
            sessionStorage.setItem("userToken", userToken.data.userToken);

            navigate("/main");
        } catch (error) {
            console.error(error);
            sessionStorage.removeItem("userToken");
            setLoginFailed(true);
        }
    };

    useEffect(() => {
        const loginFields: Array<IRegInputs> = [
            {
                key: 0,
                name: "email",
                title: "E-Mail",
                titleClass: "",
                inputClass: "",
                type: "email"
            },
            {
                key: 1,
                name: "password",
                title: "Password",
                titleClass: "",
                inputClass: "",
                type: "password"
            }
        ];

        setInputs(loginFields);
    }, []);

    return <>
        <div className="flex justify-center h-full">
            <div className="flex flex-col justify-center">
                <div
                    className="border rounded bg-gradient-to-b from-gray-400 to-cyan-600 shadow-lg shadow-indigo-500/50 p-2">
                    <div className="pb-1 text-center pb-3">
                        <p className="text-2xl">Login</p>
                    </div>
                    {
                        inputs.map(inp =>
                            <div key={inp.key} className="flex py-3">
                                <div className={`flex-1 pr-4 ${inp.titleClass}`}>{inp.title}</div>
                                <div className="flex-1">
                                    <input
                                        name={inp.name}
                                        type={inp.type}
                                        className={`rounded border-solid border-cyan-800 ${inp.inputClass}`}
                                        placeholder={inp.placeholder}
                                        onChange={inpHandler}
                                    />
                                </div>
                            </div>
                        )
                    }
                    <div className="flex justify-around pt-1">
                        <BtnGreen text="Login" onClick={loginHandler}/>
                        <Link
                            to="/register"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            children="Sign Up"
                        />
                    </div>
                    <div
                        className={`text-center py-3 rounded bg-gradient-to-r from-gray-900 to-cyan-700 ${!loginFailed ? "hidden" : "text-red-600"}`}>
                        <span>Login Failed!</span>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default LoginPage;