import React, {JSX} from "react";

const BtnGreen = (props: { text: string, classname?: string, onClick: any }): JSX.Element => {
    return <button
        onClick={props.onClick}
        className={`${props.classname} focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
    >
        {props.text}
    </button>
}

export default BtnGreen;