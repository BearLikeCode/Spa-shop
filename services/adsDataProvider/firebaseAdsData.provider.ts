import { AdsDataProviderContract } from './adsDataProvider.contract'
import fire from '../../config/fire'
import { adType } from '../../types/adType'
import moment from 'moment'

class FirebaseAdsDataProvider implements AdsDataProviderContract {
    getAds = async (): Promise<Array<any>> =>
        await fire
            .firestore()
            .collection('ads')
            .where('statusAd', '==', 'Public')
            .get()
            .then((data) =>
                data.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            )

    async getItemById(id: string): Promise<any> {
        return await fire
            .firestore()
            .collection('ads')
            .doc(`${id}`)
            .get()
            .then((docRef) => {
                return docRef.data()
            })
    }

    getItemsByEmail = async (email: string): Promise<Array<any>> =>
        await fire
            .firestore()
            .collection('ads')
            .where('createdMail', '==', `${email}`)
            .get()
            .then((data) =>
                data.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            )

    createItem(values: any, email: string): any {
        fire.firestore()
            .collection('ads')
            .add({ ...values, createdMail: email, dateCreate: moment().unix() })
    }
}

export default new FirebaseAdsDataProvider()
