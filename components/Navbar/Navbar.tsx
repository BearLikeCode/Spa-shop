import Link from 'next/Link'
import styles from './navbar.module.scss'
import classNames from 'classnames'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={classNames('container', styles.navbarRow)}>
                <Link href="/">
                    <p className={styles.navbarLogo}>SPA Shop</p>
                </Link>
                <Link href="/user/profile">User</Link>
            </div>
        </div>
    )
}

export default Navbar
