import {createContext, useState} from "react";
import {AuthProviderFactory} from "../services/authProvider/authProvider.factory";

interface AuthContextType {
    auth: boolean,
    loginUser: (username: string, password: string) => void,
    logoutUser: () => void,
    signupUser: (username: string, passsword: string, passconf: string) => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = (props: {children: object}) => {
    const [auth, changeAuth] = useState<boolean>(false)
    const authProvider = AuthProviderFactory()

    const inAuth = () => {
        changeAuth(true)
    }
2
    const outAuth = () => {
        changeAuth(false)
    }

    const loginUser = (username: string, password: string) => {
        authProvider.loginMethod(username, password).then(() => inAuth())
    }

    const signupUser = (username: string, password: string, passconf: string) => {
        authProvider.signupMethod(username, password, passconf)
    }

    const logoutUser = () => {
        authProvider.logoutMethod().then(() => outAuth())
    }

    return (
        <AuthContext.Provider value={{auth, loginUser, logoutUser, signupUser}} >
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
