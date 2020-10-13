import Link from 'next/link'
import styles from './navbar.module.scss'
import classNames from 'classnames'
import {useContext} from "react";
import {AuthContext} from "../../context/authContext";

function Navbar() {
    const { auth } = useContext(AuthContext)
    return (
        <div className={styles.navbar}>
            <div className={classNames('container', styles.navbar__row)}>
                <Link href="/">
                    <p className={classNames(styles.navbar__logo, styles.navbar__link)}>SPA Shop</p>
                </Link>
                <div>
                    {!auth ? (
                        <>
                            <Link href="/user/register">
                                <span className={classNames(styles.navbar__color, styles.navbar__register, styles.navbar__link)}>Register</span>
                            </Link>
                            |
                            <Link href="/user/login">
                                <span className={classNames(styles.navbar__color, styles.navbar__login, styles.navbar__link)}>Login</span>
                            </Link>

                        </>
                    ) :
                        <Link href="/user/profile">
                            <span className={classNames(styles.navbar__color, styles.navbar__link)}>User</span>
                        </Link>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
