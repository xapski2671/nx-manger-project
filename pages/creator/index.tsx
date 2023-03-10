import { CreatorDetails, CreatorHeader } from "@/containers/exportConts"
import Head from "next/head"

export default function Creator() {
  return (
    <>
      <Head>
        <title>{"Manger | Creator"}</title>
        <meta name="description" content="Manger Project - Fundraising on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/manger_favicon.svg" />
      </Head>

      <CreatorHeader/>
      <CreatorDetails/>
    </>
  )
}
