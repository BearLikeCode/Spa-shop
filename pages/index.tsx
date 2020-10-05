import Head from 'next/head'
import { ListAds } from '../components/'

export default function Home() {
    return (
        <>
            <Head>
                <title>Index</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ListAds />
        </>
    )
}
