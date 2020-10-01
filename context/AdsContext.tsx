import { createContext } from 'react'
import { adsDataProviderFactory } from '../services/ads-data-provider/ads-data-provider.factory'
import { adType } from '../types/adType'

interface AdsContextType {
    getAd: (id: string) => Promise<adType>
}

const AdsContext = createContext<AdsContextType>({} as AdsContextType)

const AdsProvider = (props: { children: object }) => {
    const adsProvider = adsDataProviderFactory()

    const getAd = (id: string) => {
        return adsProvider.getItemById(id)
    }

    return (
        <AdsContext.Provider value={{ getAd }}>
            {props.children}
        </AdsContext.Provider>
    )
}

export { AdsContext, AdsProvider }
