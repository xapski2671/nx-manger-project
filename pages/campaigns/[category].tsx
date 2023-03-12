import { CampaignsPage } from "@/containers/exportConts"
import Error from "next/error"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Campaigns(){
  const router = useRouter()
  const { category } = router.query
  const [cat, setCat] = useState("")

  useEffect(()=>{
    category && typeof(category) == "string" && setCat(category.replace("%20", " "))
  },[category])

  return (
    <>
      <Head>
        <title>{"Manger | Campaigns"}</title>
        <meta name="description" content="Manger Project - Fundraising on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/manger_favicon.svg" />
      </Head>
      {
        cat ? <CampaignsPage cat={cat} offVal={0}/> : <Error statusCode={404}/>
      }
    </>
  )
}