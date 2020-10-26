import { createContext, useContext, useState } from 'react'
import { adsDataProviderFactory } from '../services/adsDataProvider/adsDataProvider.factory'
import { adType } from '../types/adType'
import { AuthContext } from './authContext'

interface AdsContextType {
    takeAd: (id: string) => void
    getAdsProgressByEmail: () => Promise<Array<any>>
    getAdsList: () => Promise<Array<any>>
    getAd: (id: string) => any
    getAdsByEmail: () => Promise<Array<any>>
    createAd: (values: any) => void
}

const AdsContext = createContext<AdsContextType>({} as AdsContextType)

const AdsProvider = (props: { children: object }) => {
    const { auth, userData } = useContext(AuthContext)
    const adsProvider = adsDataProviderFactory()

    const takeAd = (id: string) => {
        return adsProvider.takeAdWork(id, userData.userEmail)
    }

    const getAdsProgressByEmail = async () => {
        return await adsProvider
            .getItemsProgressByEmail(userData.userEmail)
            .then((data) => data)
    }

    const getAdsList = async () => {
        if (auth)
            return await adsProvider
                .getAds()
                .then((data) =>
                    data.filter(
                        (item) =>
                            item.createdMail !== userData.userEmail &&
                            item.performer !== userData.userEmail
                    )
                )
        else return await adsProvider.getAds().then((data) => data)
    }

    const getAd = (id: string) => {
        return adsProvider.getItemById(id)
    }

    const getAdsByEmail = async () => {
        return await adsProvider
            .getItemsByEmail(userData.userEmail)
            .then((data) => data)
    }

    const createAd = (values) => {
        return adsProvider.createItem(values, userData.userEmail)
    }

    return (
        <AdsContext.Provider
            value={{
                takeAd,
                getAdsProgressByEmail,
                getAdsList,
                getAd,
                getAdsByEmail,
                createAd,
            }}
        >
            {props.children}
        </AdsContext.Provider>
    )
}

export { AdsContext, AdsProvider }
