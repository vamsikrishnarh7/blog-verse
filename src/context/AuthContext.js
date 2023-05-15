import { createContext, useState } from "react";

export const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({});

    const createAccount = (email,password) => {
        setUser({email,password});
        return;
    }
    const login = (email,password) => {
        setUser({email,password});
        return;
    }
    const logout = () => {
        setUser(null);
        return;
    }
    return (
        <UserContext.Provider value={{user,createAccount,login,logout}} >
            {children}
        </UserContext.Provider>
    )
}