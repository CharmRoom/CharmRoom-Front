import { HttpStatusCode } from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "../apis/Api";
import AuthApi from "../apis/AuthApi";
import UserApi from "../apis/UserApi";

export const LoginContext = createContext();
LoginContext.displayName = "LoginContext";

function LoginContextProvider({ children }) {
    const [isLogin, setLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        nickname: '',
        withdraw: false,
        level: 'BASIC',
        image: '',
    });
    const navigate = useNavigate();

    const loginCheck = async () => {
        const accessToken = localStorage.getItem("access");
        
        if (!accessToken){
            console.log("no access token")
            postLogoutProcess();
            return;
        }

        setAccessToken(accessToken);

        let response;
        try {
            response = await UserApi.info();
        } catch(error){
            console.log(`accessToken expired`);
            if (await reissue()){
                loginCheck();
            }
            postLogoutProcess();
            return;
        }

        postLoginProcess(response.data);
    }

    const reissue = async () => {
        try{
            const response = await AuthApi.reissue();
            if (response.status === HttpStatusCode.Ok){
                const accessToken = response.headers.authorization.replace("Bearer ", "");
                localStorage.setItem("access", accessToken);
                console.log(accessToken);
            }
        } catch(e){
            return false;
        }
        return true;
    }

    const logout = async () => {
        try{
            const response = await AuthApi.logout();
            if (response.status === HttpStatusCode.Ok){
                postLogoutProcess();
                navigate("/");
            }
        } catch (e) {

        }
    }

    const login = async ({username, password}) => {
        try{
            const response = await AuthApi.login({username, password});
            if (response.status === HttpStatusCode.Ok){
                const accessToken = response.headers.authorization.replace("Bearer ", "");
                localStorage.setItem("access", accessToken);
                loginCheck();
                navigate("/");
            }
        }catch(e){
            
        }
    }

    const postLogoutProcess = () => {
        localStorage.removeItem("access");
        setAccessToken(undefined);
        
        setLogin(false);
        setUserInfo(null);
    }

    const postLoginProcess = (data) => {
        setLogin(true);
        setUserInfo(data.data);
    }

    useEffect( () =>{
        loginCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <LoginContext.Provider value = { {isLogin, userInfo, login, logout } }>
            {children}
        </LoginContext.Provider>
        
    );
}

export default LoginContextProvider