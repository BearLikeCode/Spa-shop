import Link from 'next/link'
import { CreatedAds } from '..'
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/authContext";
import styles from './profileDetails.module.scss';

function ProfileDetails() {
    const { logoutUser, userData } = useContext(AuthContext)
    const [ email, changeEmail ] = useState('')

    const handleLogout = () => {
        logoutUser()
    }

    return (
        <>
            <p className={styles.profileDetails__title}>Profile</p>
            <div className={styles.profileDetails__row}>
                <div className={styles.profileDetails__profile}>
                    {userData.userImage ? <img src={`${userData.userImage}`} alt="" className={styles.profile__image}/> : <p>No image</p>}
                    <p className={styles.profile__email}>Name: {userData.userName}</p>
                    <p className={styles.profile__email}>Email: {userData.userEmail}</p>
                    <Link href="/ad/createAd"><p className={styles.profileDetails__btn}>Create ad</p></Link>
                    <button onClick={handleLogout} className={styles.profileDetails__btn}>Logout</button>
                </div>
                <CreatedAds />
            </div>
        </>
    )
}

export default ProfileDetails
