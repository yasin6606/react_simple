import {io} from "socket.io-client";

const socketIO = (): void => {
    const SOCKET_ADDRESS: string = process.env.REACT_APP_SOCKET_ADDR || `ws://127.0.0.1:${5001}`;
    let token: string = sessionStorage.getItem("userToken") || "";

    const socket = io(SOCKET_ADDRESS, {auth: {token}});

    console.log("socket");

    socket.on("n1", msg => {
        console.log(msg);
    });
};

export default socketIO;