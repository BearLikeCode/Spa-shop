import {AuthProviderContract} from "./auth-provider.contract";
import fire from "../../config/fire";
class FirebaseAuthProvider implements AuthProviderContract {

    signupMethod(): any {

    }

    loginMethod(username: string, password: string) {
        return fire
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then(function(user) {
                console.log('success login')
            }).catch(function(error) {
                const errorCode = error.code;

                if (errorCode === 'auth/wrong-password') {
                    return 'Wrong password.';
                } else {
                    return console.log(error);;
                }
        });
    }

    logoutMethod() {
        return fire.auth()
            .signOut()
            .then(() => {
                console.log('success logout')
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default new FirebaseAuthProvider()