import Link from 'next/Link'
import { CreatedAds } from '..'
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";

function ProfileDetails() {
    const { logoutUser } = useContext(AuthContext)

    const handleLogout = () => {
        logoutUser()
    }

    return (
        <>
            <p>Profile</p>
            <button onClick={handleLogout}>Logout</button>
            <Link href="/ad/createAd">Create ad</Link>

            <CreatedAds />
        </>
    )
}

export default ProfileDetails
