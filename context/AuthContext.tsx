import {createContext, useState} from "react";
import {AuthProviderFactory} from "../services/auth-provider/auth-provider.factory";
import fire from "../config/fire";

interface AuthContextType {
    auth: boolean,
    inAuth: () => void,
    outAuth: () => void,
    loginUser: (username: string, password: string) => void,
    logoutUser: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = (props: {children: object}) => {
    const [auth, changeAuth] = useState<boolean>(false)
    const authProvider = AuthProviderFactory()

    const inAuth = () => {
        changeAuth(true)
    }

    const outAuth = () => {
        changeAuth(false)
    }

    const loginUser = (username: string, password: string) => {
        authProvider.loginMethod(username, password).then(() => inAuth())
    }

    const signup = () => {

    }

    const logoutUser = () => {
        authProvider.logoutMethod()
    }

    return (
        <AuthContext.Provider value={{auth, loginUser, inAuth, outAuth, logoutUser}} >
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }