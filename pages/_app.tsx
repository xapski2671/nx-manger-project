import "@/styles/globals.css"
import "@/styles/index.css"
import type { AppProps } from "next/app"
import { Footer, Navbar } from "@/containers/exportConts"
import { ApolloClient } from "@apollo/client"
import { InMemoryCache } from "@apollo/client/cache"
import { ApolloProvider } from "@apollo/client/react"
import { ConnectionProvider } from "@/contexts/connection"

const graphClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_SUBGRAPH_URI
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConnectionProvider>
        <ApolloProvider client={graphClient}>
          <Navbar/>
          <Component {...pageProps} />
          <Footer/>
        </ApolloProvider>
      </ConnectionProvider>
    </>
  )
}
