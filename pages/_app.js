import '../styles/globals.scss'
import {Navbar} from "../components";
import {AdsProvider} from "../context/adsContext";
import {AuthProvider} from "../context/authContext";

function MyApp({ Component, pageProps }) {
  return <>
    <AuthProvider>
      <AdsProvider>
        <Navbar />
        <div className="container bodyMarginTop">
          <Component {...pageProps} />
        </div>
      </AdsProvider>
    </AuthProvider>
  </>
}

export default MyApp
