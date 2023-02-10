import "@/styles/globals.css"
import "@/styles/index.css"
import type { AppProps } from "next/app"
import { Footer, Navbar } from "@/containers/exportConts"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
