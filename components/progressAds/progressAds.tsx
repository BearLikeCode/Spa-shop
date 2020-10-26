import { useEffect, useContext, useState } from 'react'
import { AdsContext } from '../../context/adsContext'
import styles from './progressAds.module.scss'

function progressAds() {
    const { getAdsProgressByEmail } = useContext(AdsContext)
    const [adsList, setAds] = useState([])

    useEffect(() => {
        ;(async () => {
            setAds(await getAdsProgressByEmail())
        })()
    }, [])

    console.log(adsList)

    return (
        <div className={styles.createdAds}>
            <p className={styles.createdAdsTitle}>Ads in progress</p>
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
                    <p>No Ads in progress</p>
                )}
            </div>
        </div>
    )
}

export default progressAds
