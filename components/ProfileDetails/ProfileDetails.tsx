import Link from 'next/Link'
import { CreatedAds } from '..'

function ProfileDetails() {
    return (
        <div className="container">
            <p>Profile</p>
            <Link href="/ad/createAd">Create ad</Link>

            <CreatedAds />
        </div>
    )
}

export default ProfileDetails
