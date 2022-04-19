import { createContext, useEffect } from "react";

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [auth,setAuth] = useEffect({
        user:null,
        isAuthenticated:false,
    })
    return <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;


export const useAuth= ()=>{

    // const 



}