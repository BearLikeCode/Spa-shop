import {createContext, useState} from "react";
import {AuthProviderFactory} from "../services/authProvider/authProvider.factory";
import fire from "../config/fire";

interface AuthContextType {
    auth: boolean,
    userData: {userName: string, userEmail: string, userImage: string},
    loginUser: (username: string, password: string) => any,
    logoutUser: () => void,
    signupUser: (name: string, username: string, passsword: string, passconf: string, image: any) => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = (props: {children: object}) => {
    const [auth, changeAuth] = useState<boolean>(false)
    const [userData, changeUserData] = useState<{userName: string, userEmail: string, userImage: string}>({} as {userName: string, userEmail: string, userImage: string})
    const authProvider = AuthProviderFactory()

    const inAuth = () => {
        changeAuth(true)
    }

    const outAuth = () => {
        changeAuth(false)
    }

    const loginUser = (username: string, password: string) => {
        authProvider.loginMethod(username, password)
            .then((data) => {
                if (data) {
                    fire.auth().onAuthStateChanged(function(user) {
                        let userName = user.displayName;
                        let userEmail = user.email;
                        let userImage = user.photoURL;
                        changeUserData({userName, userEmail, userImage})
                    });
                    inAuth();
                    return true;
                } else {outAuth(); return false;}
            })
    }

    const signupUser = (name: string, username: string, password: string, passconf: string, image: any) => {
        authProvider.signupMethod(name, username, password, passconf, image)
    }

    const logoutUser = () => {
        authProvider.logoutMethod().then(() => outAuth())
    }

    return (
        <AuthContext.Provider value={{auth, userData, loginUser, logoutUser, signupUser}} >
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
