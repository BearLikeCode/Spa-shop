import Link from 'next/link'
import styles from './navbar.module.scss'
import classNames from 'classnames'
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function Navbar() {
    const { auth } = useContext(AuthContext)

    return (
        <div className={styles.navbar}>
            <div className={classNames('container', styles.navbarRow)}>
                <Link href="/">
                    <p className={styles.navbarLogo}>SPA Shop</p>
                </Link>
                <div>
                    {!auth ? (
                        <>
                            <Link href="/user/register">
                                <a>Register</a>
                            </Link>{' '}
                            |
                            <Link href="/user/login">
                                <a> Login</a>
                            </Link>

                        </>
                    ) :<Link href="/user/profile">User</Link>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
