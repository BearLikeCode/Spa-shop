import { adType } from '../../types/adType'

export interface AdsDataProviderContract {
    getItemById(id: string): Promise<adType>
}
