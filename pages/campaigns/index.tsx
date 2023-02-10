import { CampaignGrid, CategoryFilter } from "@/components/exportComps"
import Head from "next/head"

export default function CampaignsPage(){
  return (
    <>
      <Head>
        <title>{"Manger | Campaigns"}</title>
        <meta name="description" content="Manger Project - Fundraising on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/manger_favicon.svg" />
      </Head>

      <section className="page sc-padding">
        <CategoryFilter/>
        <CampaignGrid/>
      </section>
    </>
  )
}