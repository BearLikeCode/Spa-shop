import { AdsDataProviderContract } from './ads-data-provider.contract'
import fire from '../../config/fire'
import { adType } from '../../types/adType'

class FirebaseAdsDataProvider implements AdsDataProviderContract {
    async getItemById(id: string): Promise<adType> {
        const item: any = await fire
            .firestore()
            .collection('ads')
            .doc(`${id}`)
            .get()
            .then((docRef) => {
                return docRef.data()
            })
        return item
    }
}

export default new FirebaseAdsDataProvider()
