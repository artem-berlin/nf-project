import {ReactNode, useContext, useEffect, useState} from "react";
import AuthContext from "./AuthContext";
import {loginUser} from "../service/apiService";
import {useNavigate} from "react-router-dom";

export default function AuthProvider({children}:{children :ReactNode}) {

    const [token , setToken] = useState('')
    const nav = useNavigate()

    useEffect(()=>{
        if (token){
            nav("/main")}
      /*  } else {
            nav("/main")
        }*/
    }, [token, nav])

    const login = (email: string, password : string) => {
        return loginUser({email:email, password:password})
      /*  return fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
        body: JSON.stringify({'email':email, 'password':password})
        })
.then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.text()
        } else if (response.status === 403) {
            throw new Error(`$('bad-credentials-error')`)
        } else {
            throw new Error(`$('error-code') ${response.status}`)
        }
})*/
            .then(data => setToken(data));
                            //json weg
    }

    const logout = () => {
        setToken('')
    }

    return <AuthContext.Provider value={{token, login, logout}} >{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext)