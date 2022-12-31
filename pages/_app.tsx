import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import {SessionProvider} from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <PayPalScriptProvider options={{ 
        "client-id": "AeOff4wSXx42_1alf1CsAZMJFS-1txoSTlnCa0xMm9FiEmlf_RkqDhZX8nZ2kIk5-fX85MpT-thanCK7",
          vault: true,
          intent: "subscription",
        }}>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </SessionProvider>
  )
}