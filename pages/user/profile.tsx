import { useContext } from 'react'
import { ProfileDetails } from '../../components'
import { AuthContext } from '../../context/authContext'

function Profile() {
    const { auth } = useContext(AuthContext)

    return <>{auth ? <ProfileDetails /> : <p>You are not logged in</p>}</>
}

export default Profile
