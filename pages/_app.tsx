import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { PayPalScriptProvider } from "@paypal/react-paypal-js";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <Component {...pageProps} />
    </PayPalScriptProvider>
  )
}

