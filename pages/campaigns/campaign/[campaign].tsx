import { ActiveCampaign, CampaignDetails } from "@/containers/exportConts"
import Error from "next/error"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import ReactLoading from "react-loading"


export default function Campaign() {
  const router = useRouter()
  const { campaign } = router.query
  const [isFund, setIsFund] = useState(false)

  return (
    <>
      <Head>
        <title>{"Manger | Campaign"}</title>
        <meta name="description" content="Manger Project - Fundraising on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/manger_favicon.svg" />
      </Head>
      {
        !campaign 
          ? <ReactLoading type="bubbles" color="#827B93"/> 
          : typeof(campaign) == "string" && campaign.includes("0x") && campaign.length == 42 
            ? <>
              <ActiveCampaign address={campaign} click={()=>{setIsFund(true)}}/>
              <CampaignDetails address={campaign} onFund={isFund} resetter={()=>{setIsFund(false)}}/>
            </>
            : <Error statusCode={404}/>
      }
    </>
  )
}
