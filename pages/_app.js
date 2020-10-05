import '../styles/globals.scss'
import {Navbar} from "../components";
import {AdsProvider} from "../context/AdsContext";
import {AuthProvider} from "../context/AuthContext";

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
