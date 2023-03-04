import "@/styles/globals.css"
import "@/styles/index.css"
import type { AppProps } from "next/app"
import { Footer, Navbar } from "@/containers/exportConts"
import { MoralisProvider } from "react-moralis"
import { ApolloClient } from "@apollo/client"
import { InMemoryCache } from "@apollo/client/cache"
import { ApolloProvider } from "@apollo/client/react"

const graphClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_SUBGRAPH_URI
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MoralisProvider initializeOnMount={false}>
        <ApolloProvider client={graphClient}>
          <Navbar/>
          <Component {...pageProps} />
          <Footer/>
        </ApolloProvider>
      </MoralisProvider>
    </>
  )
}
