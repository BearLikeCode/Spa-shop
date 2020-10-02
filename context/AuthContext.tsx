import {createContext, useState} from "react";
import {AuthProviderFactory} from "../services/auth-provider/auth-provider.factory";

interface AuthContextType {
    auth: boolean,
    inAuth: () => void,
    outAuth: () => void,
    loginUser: (username: string, password: string) => void
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
        authProvider.loginMethod(username, password).then(data => console.log(data))
    }

    const signup = () => {

    }

    return (
        <AuthContext.Provider value={{auth, loginUser, inAuth, outAuth}} >
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }