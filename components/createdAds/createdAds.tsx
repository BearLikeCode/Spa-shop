import { useEffect, useContext, useState } from 'react'
import { AdsContext } from '../../context/adsContext'
import styles from './createdAds.module.scss'

function createdAds() {
    const { getAdsByEmail } = useContext(AdsContext)
    const [adsList, setAds] = useState([])

    useEffect(() => {
        ;(async () => {
            setAds(await getAdsByEmail())
        })()
    }, [])

    return (
        <div className={styles.createdAds}>
            <p className={styles.createdAdsTitle}>Created Ads</p>
            <div className={styles.createdAdsRow}>
                {adsList.length !== 0 ? (
                    adsList.map((item) => (
                        <div className={styles.createdAdsItem}>
                            <p>Name Ad: {item.nameAd}</p>
                            <p>Description Ad: {item.descriptionAd}</p>
                            <p>Place Ad: </p>
                            <ul>
                                {item.placeAd.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No created Ads</p>
                )}
            </div>
        </div>
    )
}

export default createdAds
