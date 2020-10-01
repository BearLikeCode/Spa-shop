import '../styles/globals.scss'
import {Navbar} from "../components";
import {AdsProvider} from "../context/AdsContext";

function MyApp({ Component, pageProps }) {
  return <>
    <AdsProvider>
      <Navbar />
      <Component {...pageProps} />
    </AdsProvider>
  </>
}

export default MyApp
