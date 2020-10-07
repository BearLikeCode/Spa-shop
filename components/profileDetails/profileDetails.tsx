import Link from 'next/link'
import { createdAds } from '..'
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import styles from './profileDetails.module.scss';
import fire from "../../config/fire";

function profileDetails() {
    const { logoutUser } = useContext(AuthContext)
    const [ email, changeEmail ] = useState('')

    useEffect(() => {
        fire.auth().onAuthStateChanged(function(user1) {
            var displayName = user1.displayName;
            var email = user1.email;
            var emailVerified = user1.emailVerified;
            var photoURL = user1.photoURL;
            console.log(displayName)
            console.log(email)
            console.log(emailVerified)
            console.log(photoURL)
        })
        // changeEmail(fire.auth().currentUser.email)

        // fire.auth()
        //     .signInWithEmailAndPassword('test5@gmail.com', 'edhemnetqx')
        //     .then(function(userCredential) {
        //         userCredential.user.updateEmail('test6@gmail.com')
        //     })
    })

    const handleLogout = () => {
        logoutUser()
    }

    return (
        <>
            <p className={styles.profileDetails__title}>Profile</p>
            <div className={styles.profileDetails__row}>
                <div className={styles.profileDetails__profile}>
                    <p className={styles.profile__email}>Email: {email}</p>
                    <Link href="/ad/createAd"><p className={styles.profileDetails__btn}>Create ad</p></Link>
                    <button onClick={handleLogout} className={styles.profileDetails__btn}>Logout</button>
                </div>
                <createdAds />
            </div>
        </>
    )
}

export default profileDetails
