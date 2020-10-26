import {AuthProviderContract} from "./authProvider.contract";
import fire from "../../config/fire";
class FirebaseAuthProvider implements AuthProviderContract {

    signupMethod(name, username ,password, passConf, image): any {
        if (password !== passConf) {
            return console.log('Password and password confirmation does not   match')
        } else {

            return fire.auth()
                .createUserWithEmailAndPassword(username, password)
                .then(user => {
                    if (image.name) {
                            fire.storage().ref().child(`${image.name}`).put(image)
                                .then((snapshot) => {
                                    console.log('Uploaded a blob or file!');
                                })
                                .then(() => {
                                    return fire.storage().ref().child(image.name).getDownloadURL().then((url) => url);
                                })
                                .then((imageUrl) => {
                                    if (user) fire.auth().currentUser.updateProfile({
                                        displayName: name,
                                        photoURL: imageUrl
                                    })
                                })
                                .catch(error => {
                                    console.log('signup Method')
                                    console.log(error)
                                })
                        } else {
                            if(user) fire.auth().currentUser.updateProfile({
                                displayName: name
                            })
                        }
                })
                .then(() => console.log('success'))
                .catch((err) => {
                    console.log(err.code, err.message)
                });
        }
    }

    loginMethod(username: string, password: string): any {
        return fire
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then((user) => {
                return true;
            }).catch((error) => {
                const errorCode = error.code;
                if (errorCode === 'auth/wrong-password') {
                    return 'Wrong password.';
                } else {
                    return console.log(error);;
                }
                return false;
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
