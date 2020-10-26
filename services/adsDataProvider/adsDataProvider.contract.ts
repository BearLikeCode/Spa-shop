import { adType } from '../../types/adType'

export interface AdsDataProviderContract {
    takeAdWork(id: string, userEmail: string): void
    getItemsProgressByEmail(email: string): Promise<any>
    getAds(): Promise<any>
    getItemById(id: string): Promise<adType>
    getItemsByEmail(email: string): Promise<any>
    createItem(values: any, email: string): void
}
