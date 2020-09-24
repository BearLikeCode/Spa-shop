import { useState, useEffect } from 'react'
import fire from '../../config/fire'
import Link from 'next/Link'

function CreatedAds() {
    const [ads, setAds] = useState([])

    useEffect(() => {
        fire.firestore()
            .collection('ads')
            .onSnapshot(snap => {
                const adsFire = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setAds(adsFire);
            });
    }, [setAds])
    console.log(ads)
    return (
        <div>
            {ads.map(ad =>
                <li key={ad.id}>
                    <Link href="/ad/[id]" as={'/ad/' + ad.id }>
                        <p>{ad.nameAd}</p>
                    </Link>
                </li>
            )}
        </div>
    )
}

export default CreatedAds