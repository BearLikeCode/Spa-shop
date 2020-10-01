import { useContext, useEffect, useState } from 'react'
import moment from 'moment'
import styles from './adDetails.module.scss'
import { AdsContext } from '../../context/AdsContext'
import { adType } from '../../types/adType'

function AdDetails(props: { id: string }) {
    const { getAd } = useContext(AdsContext)
    const [ad, setAd] = useState<adType>({} as adType)

    useEffect(() => {
        async function fetchItem() {
            setAd(await getAd(props.id))
        }

        fetchItem()
    }, [])

    return (
        <div className={'container'}>
            {ad && (
                <>
                    <p className={styles.adDetails__title}>Add: {ad.nameAd}</p>
                    <p>{ad.descriptionAd}</p>
                    <p>
                        Types of accommodations:
                        <br />
                        {ad.placeAd &&
                            ad.placeAd.map((item) => (
                                <>
                                    {item}
                                    <br />
                                </>
                            ))}
                    </p>
                    <p>{moment.unix(ad.dateCreate).format('MM/DD/YYYY')}</p>
                </>
            )}
        </div>
    )
}

export default AdDetails
