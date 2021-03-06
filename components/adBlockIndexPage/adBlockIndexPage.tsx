import Link from 'next/link'
import Router from 'next/router'
import moment from 'moment'
import styles from './adBlockIndexPage.module.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { AdsContext } from '../../context/adsContext'

function adBlockIndexPage(props) {
    const { auth } = useContext(AuthContext)
    const { takeAd } = useContext(AdsContext)

    const subscribeButton = (e) => {
        if (auth) takeAd(adProp.id)
    }

    const { adProp } = props
    return (
        <div className={styles.adBlock}>
            <Link href="/ad/[id]" as={'/ad/' + adProp.id}>
                <p className={styles.adBlock__name}>Name: {adProp.nameAd}</p>
            </Link>
            <p className={styles.adBlock__description}>
                <span className={styles.adBlock__title}>Description:</span>{' '}
                {adProp.descriptionAd}
            </p>
            <p className={styles.adBlock__accommod}>
                <span className={styles.adBlock__title}>
                    Types of accommodations:
                </span>{' '}
                <br />
                {adProp.placeAd.map((item) => (
                    <>
                        {item}
                        <br />
                    </>
                ))}
            </p>
            <p>
                <span className={styles.adBlock__title}>Date create:</span>{' '}
                {moment.unix(adProp.dateCreate).format('MM/DD/YYYY')}
            </p>
            <button
                type="submit"
                onClick={subscribeButton}
                className={styles.adBlock__button}
            >
                Take to my portfolio
            </button>
        </div>
    )
}

export default adBlockIndexPage
