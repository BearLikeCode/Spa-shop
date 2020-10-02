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
                if (user) return true
            }).catch(function(error) {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === 'auth/wrong-password') {
                    return 'Wrong password.';
                } else {
                    return errorMessage;
                }
            console.log(error);
        });

    }

    logoutMethod() {
        fire.auth()
            .signOut();
    }
}

export default new FirebaseAuthProvider()