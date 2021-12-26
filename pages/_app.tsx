import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../store/index'
import ReduxWrapper from '../components/ReduxWrapper'

function MyApp({ Component, pageProps }: AppProps) {


  return <Provider store={store}><ReduxWrapper><Component {...pageProps} /></ReduxWrapper></Provider>
}

export default MyApp
