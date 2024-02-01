import React, {ChangeEvent, JSX, useEffect, useState} from "react";
import AxiosReq from "../../utils/apis";
import {IRegInputs, IRegUser} from "../../assets/interfaces/register.interface";
import BtnGreen from "../../components/buttons/BtnGreen";
import {useNavigate} from "react-router-dom";

const Register = (): JSX.Element => {

    const [inputs, setInputs] = useState<IRegInputs[]>([]);
    const [info, setInfo] = useState<IRegUser>();
    const [successReg, setSuccessReg] = useState<number>(0);

    const navigate = useNavigate();

    const inpHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setInfo(prev => ({...prev, [name]: value} as IRegUser));
    };

    const regHandler = async () => {
        try {
            await AxiosReq.registerUser(info);

            setSuccessReg(1);

            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } catch (error) {
            setSuccessReg(2);
            console.error(error);
        }
    };

    useEffect(() => {
        const regFields: Array<IRegInputs> = [
            {
                key: 0,
                name: "firstname",
                title: "Firstname",
                titleClass: "",
                inputClass: "",
                type: "text"
            },
            {
                key: 1,
                name: "lastname",
                title: "Lastname",
                titleClass: "",
                inputClass: "",
                type: "text"
            },
            {
                key: 2,
                name: "phoneNumber",
                title: "Phone Number",
                titleClass: "",
                inputClass: "",
                type: "tel"
            },
            {
                key: 3,
                name: "email",
                title: "E-mail",
                titleClass: "",
                inputClass: "",
                type: "email"
            },
            {
                key: 4,
                name: "password",
                title: "Password",
                titleClass: "",
                inputClass: "",
                type: "password"
            }
        ]

        setInputs(regFields);
    }, []);

    return <>
        <div className="flex justify-center h-full">
            <div className="flex flex-col justify-center">
                <div className="border rounded bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2">
                    <div className="pb-1 text-center pb-3">
                        <p className="text-2xl">Register</p>
                    </div>
                    <div className="flex flex-col">
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
                    </div>
                    <div className="flex justify-around pt-1">
                        <BtnGreen text="Register" onClick={regHandler}/>
                    </div>
                    <div
                        className={`text-center py-3 rounded bg-gradient-to-r from-gray-900 to-cyan-700 ${successReg === 0 ? "hidden" : successReg === 1 ? "text-green-600" : "text-red-600"}`}>
                        <span>Registration </span>{successReg === 1 ? <span>Success</span> : <span>Failed</span>}
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Register;