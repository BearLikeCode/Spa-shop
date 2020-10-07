import { useState, useEffect } from 'react'
import fire from '../../config/fire'
import adBlockIndexPage from '../adBlockIndexPage/adBlockIndexPage'
import styles from './listAds.module.scss'
import classNames from 'classnames'

function listAds() {
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
                    <adBlockIndexPage adProp={ad} key={ad.id} />
                ))}
            </div>
        </>
    )
}

export default listAds
