import React from "react";
import { Navigate } from "react-router-dom";

const AutenticaoLogin = () =>{
    if(localStorage.getItem("token") !== null){
        return false;
    }
    return true;
}

function RotaPrivadaLogin({ children } : any){
    const autenticacao = AutenticaoLogin();
    return autenticacao ? children: <Navigate to="/"/>
}

export default RotaPrivadaLogin;