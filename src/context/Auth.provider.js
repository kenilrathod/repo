import { createContext, useEffect, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        isAuthenticated: false,
    });
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    const { auth, setAuth } = useContext(AuthContext);

    const login = (user) => {
        const userList = getUserList();

        const userExists = userList.find((u) => u.email === user.email && u.password === user.password);

        if (userExists) {
            setAuth({
                user,
                isAuthenticated: true,
            });
            storeToLocalStorage({
                user,
                isAuthenticated: true,
            });
            return true;
        } else {
            setAuth({
                user,
                isAuthenticated: false,
            });
            storeToLocalStorage({
                user,
                isAuthenticated: false,
            });
            return false;
        }
    };
    const logout = () => {
        setAuth({
            user: null,
            isAuthenticated: false,
        });
        storeToLocalStorage({
            user: null,
            isAuthenticated: false,
        });
    };

    const registerUser = (user) => {
        setAuth({
            user,
            isAuthenticated: true,
        });
        storeToLocalStorage({
            user,
            isAuthenticated: true,
        });
        addToUserList(user);
    };

    const storeToLocalStorage = () => {
        localStorage.setItem("auth", JSON.stringify(auth));
    };

    const addToUserList = (user) => {
        const userList = JSON.parse(localStorage.getItem("userList") ?? "[]");
        userList.push(user);
        localStorage.setItem("userList", JSON.stringify(userList));
    };

    const getUserList = () => {
        const list = JSON.parse(localStorage.getItem("userList") ?? "[]");
        console.log(list);
        return list;
    };

    const restoreFromLocalStorage = () => {
        const authFromLocalStorage = JSON.parse(localStorage.getItem("auth"));
        if (authFromLocalStorage) {
            setAuth(authFromLocalStorage);
        }
    };

    useEffect(() => {
        restoreFromLocalStorage();
    }, []);

    return {
        auth,
        setAuth,
        login,
        logout,
        registerUser,
    };
};
