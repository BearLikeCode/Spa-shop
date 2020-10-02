import '../styles/globals.scss'
import {Navbar} from "../components";
import {AdsProvider} from "../context/AdsContext";
import {AuthProvider} from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return <>
    <AuthProvider>
      <AdsProvider>
        <Navbar />
        <Component {...pageProps} />
      </AdsProvider>
    </AuthProvider>
  </>
}

export default MyApp
