import {createContext, useState} from "react";
import {AuthProviderFactory} from "../services/auth-provider/auth-provider.factory";
import fire from "../config/fire";

interface AuthContextType {
    auth: boolean,
    loginUser: (username: string, password: string) => void,
    logoutUser: () => void,
    signup: () => void
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

    const signup = () => {

    }

    const logoutUser = () => {
        authProvider.logoutMethod().then(() => outAuth())
    }

    return (
        <AuthContext.Provider value={{auth, loginUser, logoutUser, signup}} >
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }