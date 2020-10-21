import { adType } from '../../types/adType'

export interface AdsDataProviderContract {
    getAds(): Promise<any>
    getItemById(id: string): Promise<adType>
    getItemsByEmail(email: string): Promise<any>
    createItem(values: any, email: string): void
}
