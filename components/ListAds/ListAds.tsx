import { useState, useEffect } from 'react'
import fire from '../../config/fire'
import AdBlockIndexPage from '../AdBlockIndexPage/AdBlockIndexPage'
import styles from './ListAds.module.scss'
import classNames from 'classnames'

function ListAds() {
    const [ads, setAds] = useState([])

    useEffect(() => {
        fire.firestore()
            .collection('ads')
            .where('statusAd', '==', 'Public')
            //.orderBy('dateCreate', 'desc')
            .onSnapshot((snap) => {
                const adsFire = snap.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setAds(adsFire)
            })
    }, [setAds])

    return (
        <>
            <p className={styles.listAdsTitle}>List of advertisment</p>
            <div className={classNames(styles.adBlocks, 'row')}>
                {ads.map((ad) => (
                    <AdBlockIndexPage adProp={ad} key={ad.id} />
                ))}
            </div>
        </>
    )
}

export default ListAds
