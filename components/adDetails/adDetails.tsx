import { useContext, useEffect, useState } from 'react'
import moment from 'moment'
import styles from './adDetails.module.scss'
import { AdsContext } from '../../context/AdsContext'
import { adType } from '../../types/adType'

function adDetails(props: { id: string }) {
    const { getAd } = useContext(AdsContext)
    const [ad, setAd] = useState<adType>({} as adType)

    useEffect(() => {
        (async () => {
            setAd(await getAd(props.id))
        })()
    })

    return (
        <div className={'container'}>
            {ad && (
                <>
                    <p className={styles.adDetails__title}>Add: {ad.nameAd}</p>
                    <p className={styles.adDetails__description}>Description: {ad.descriptionAd}</p>
                    <p className={styles.adDetails__accommodation}>
                        Types of accommodations:
                        <br />
                        {ad.placeAd &&
                            ad.placeAd.map((item, index) => (
                                <span key={index}>
                                    {item}
                                    <br />
                                </span>
                            ))}
                    </p>
                    <p className={styles.adDetails__date}>Date create: {moment.unix(ad.dateCreate).format('MM/DD/YYYY')}</p>
                </>
            )}
        </div>
    )
}

export default adDetails
