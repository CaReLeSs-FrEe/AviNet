import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { token } from "morgan";

const AuthContext = createContext()

function AuthProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [user, setUser] = useState(null)
    const storeToken = token => {
        localStorage.setItem("authToken", token)
    }
    const verifiedUser = () => {
        const storedToken = localStorage.getItem("authToken"); 
        if(storedToken) {
            axios.get()
        } 
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, user}}>
            {{children}}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}