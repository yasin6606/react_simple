import {HTMLInputTypeAttribute, Key} from "react";

export interface IRegInputs {
    key: Key;
    name: string;
    title: string;
    titleClass?: string;
    type: HTMLInputTypeAttribute;
    inputClass?: string;
    placeholder?: string;
}

export interface IRegUser {
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    password: string;
}