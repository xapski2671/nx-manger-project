import { CampaignGrid, CategoryFilter } from "@/components/exportComps"
import { GET_HOMEPAGE_CAMPAIGNS } from "@/constants/subgraphQueries"
import { ConnectionContext } from "@/contexts/connection"
import { useCampaigns } from "@/hooks/useCampaigns"
import { conn } from "@/types"
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client"
import { useContext, useEffect, useState } from "react"
import ReactLoading from "react-loading"

export default function Campaigns() {
  const { isConnected, loading, campaigns } = useCampaigns()

  return (
    <section className="cp-campaigns sc-padding fl-cl fl-c">
      <CategoryFilter/>
      {
        !isConnected 
          ? <div className="cp-load-alert fl-cl fl-c">
            <p>{"Please connect your wallet to view campaigns"}</p> 
            <ReactLoading type={"bubbles"} color="#827B93"/>
          </div>
          : loading || !campaigns ? <ReactLoading type={"bubbles"} color="#827B93"/> 
            : <CampaignGrid mapArray={campaigns}/>
      }
    </section>
  )
}
