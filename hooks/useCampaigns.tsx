import { GET_HOMEPAGE_CAMPAIGNS } from "@/constants/subgraphQueries"
import { ConnectionContext } from "@/contexts/connection"
import { conn } from "@/types"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { useCallback, useContext, useEffect, useState } from "react"

export function useCampaigns(){
  const { isConnected }:conn = useContext(ConnectionContext)!
  const [loading, setLoading] = useState(true)
  const [campaigns, setCampaigns] = useState([])

  const callCampaigns = useCallback(async()=>{
    const client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_SUBGRAPH_URI,
      cache: new InMemoryCache(),
    })

    const campaigns = await client
      .query({
        query: GET_HOMEPAGE_CAMPAIGNS
      })
      .then(async data => data.data.campaignAddeds)
      .catch(error => console.log(error))

    setCampaigns(campaigns)
    campaigns && setLoading(false)
  },[]) 

  useEffect(() => {
    let isIn = true
    isIn && isConnected && callCampaigns()
    return () => {isIn = false}
  }, [isConnected, callCampaigns])

  return {
    isConnected,
    loading,
    campaigns
  }
}