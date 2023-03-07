import { ActiveCampaign, CampaignDetails } from "@/containers/exportConts"
import Error from "next/error"
import Head from "next/head"
import { useRouter } from "next/router"

export default function Campaign() {
  const router = useRouter()
  const { campaign } = router.query

  return (
    <>
      <Head>
        <title>{"Manger | Campaign"}</title>
        <meta name="description" content="Manger Project - Fundraising on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/manger_favicon.svg" />
      </Head>
      {
        typeof(campaign) == "string" && campaign ? campaign.includes("0x") && campaign.length == 42 
          ? <>
            <ActiveCampaign address={campaign}/>
            <CampaignDetails address={campaign}/>
          </>
          : <Error statusCode={404}/>
          : <Error statusCode={404}/>
      }
    </>
  )
}
