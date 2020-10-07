import Link from 'next/link'
import moment from 'moment'
import styles from './adBlockIndexPage.module.scss'

function adBlockIndexPage(props) {
    const { adProp } = props
    return (
        <div className={styles.adBlock} key={adProp.id}>
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
        </div>
    )
}

export default adBlockIndexPage
