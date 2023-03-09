import { GET_ALL_CAMPAIGNS, GET_HOMEPAGE_CAMPAIGNS, GET_SOME_CAMPAIGNS } from "@/constants/subgraphQueries"
import { ConnectionContext } from "@/contexts/connection"
import { conn } from "@/types"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { useCallback, useContext, useEffect, useState } from "react"

export function useCampaigns(id:string){
  const { isConnected }:conn = useContext(ConnectionContext)!
  const [loading, setLoading] = useState(true)
  const [campaigns, setCampaigns] = useState([])

  const callHomeCampaigns = useCallback(async()=>{
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

  const callAllCampaigns = useCallback(async()=>{
    const client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_SUBGRAPH_URI,
      cache: new InMemoryCache(),
    })

    const campaigns = await client
      .query({
        query: GET_ALL_CAMPAIGNS
      })
      .then(async data => data.data.campaignAddeds)
      .catch(error => console.log(error))

    setCampaigns(campaigns)
    campaigns && setLoading(false)
  },[])

  const callSomeCampaigns = useCallback(async(id:string)=>{
    const client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_SUBGRAPH_URI,
      cache: new InMemoryCache(),
    })

    const campaigns = await client
      .query({
        query: GET_SOME_CAMPAIGNS,
        variables: { category: id }
      })
      .then(async data => data.data.campaignAddeds)
      .catch(error => console.log(error))

    setCampaigns(campaigns)
    campaigns && setLoading(false)
  },[])

  useEffect(() => {
    let isIn = true 
    if(id == "home"){isIn && isConnected && callHomeCampaigns()}
    else if(id == "All Categories"){isIn && isConnected && callAllCampaigns()}
    else{isIn && isConnected && callSomeCampaigns(id)}
    return () => {isIn = false}
  }, [isConnected, callHomeCampaigns])

  return {
    isConnected,
    loading,
    campaigns
  }
}