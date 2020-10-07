import Link from 'next/link'
import styles from './navbar.module.scss'
import classNames from 'classnames'
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function Navbar() {
    const { auth } = useContext(AuthContext)

    return (
        <div className={styles.navbar}>
            <div className={classNames('container', styles.navbar__row)}>
                <Link href="/">
                    <p className={styles.navbar__logo}>SPA Shop</p>
                </Link>
                <div>
                    {!auth ? (
                        <>
                            <Link href="/user/register">
                                <span className={classNames(styles.navbar__color, styles.navbar__register)}>Register</span>
                            </Link>
                            |
                            <Link href="/user/login">
                                <span className={classNames(styles.navbar__color, styles.navbar__login)}>Login</span>
                            </Link>

                        </>
                    ) :
                        <Link href="/user/profile">
                            <span className={styles.navbar__color}>User</span>
                        </Link>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
