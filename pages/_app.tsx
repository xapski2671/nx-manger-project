import "@/styles/globals.css"
import "@/styles/index.css"
import type { AppProps } from "next/app"
import { Footer, Navbar } from "@/containers/exportConts"
import { MoralisProvider } from "react-moralis"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MoralisProvider initializeOnMount={false}>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </MoralisProvider>
    </>
  )
}
