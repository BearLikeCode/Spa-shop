import {AuthProviderContract} from "./auth-provider.contract";
import fire from "../../config/fire";
class FirebaseAuthProvider implements AuthProviderContract {

    signupMethod(username ,password, passConf): any {
        if (password !== passConf) {
            return console.log('Password and password confirmation does not   match')
        } else {
            return fire.auth()
                .createUserWithEmailAndPassword(username, password)
                .then(() => console.log('success'))
                .catch((err) => {
                    console.log(err.code, err.message)
                })
        }
    }

    loginMethod(username: string, password: string): any {
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

    logoutMethod(): any {
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