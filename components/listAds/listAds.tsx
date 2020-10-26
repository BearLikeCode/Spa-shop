import { useEffect, useContext, useState } from 'react'
import { AdBlockIndexPage } from '..'
import { AdsContext } from '../../context/adsContext'
import styles from './listAds.module.scss'
import classNames from 'classnames'

function ListAds() {
    const { getAdsList } = useContext(AdsContext)
    const [adsList, addAds] = useState([])

    useEffect(() => {
        ;(async () => {
            addAds(await getAdsList())
        })()
    }, [])

    return (
        <>
            <p className={styles.listAdsTitle}>List of advertisment</p>
            <div className={classNames(styles.adBlocks, 'row')}>
                {adsList ? (
                    adsList.map((ad, index) => (
                        <AdBlockIndexPage adProp={ad} key={index} />
                    ))
                ) : (
                    <p>No Ads</p>
                )}
            </div>
        </>
    )
}

export default ListAds
