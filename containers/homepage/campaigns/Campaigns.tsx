import { CampaignGrid, CategoryFilter } from "@/components/exportComps"
import { GET_HOMEPAGE_CAMPAIGNS } from "@/constants/subgraphQueries"
import { ConnectionContext } from "@/contexts/connection"
import { conn } from "@/types"
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client"
import { useContext, useEffect, useState } from "react"

export default function Campaigns() {
  const { isConnected }:conn = useContext(ConnectionContext)!
  const [loading, setLoading] = useState(true)
  const [campaigns, setCampaigns] = useState([])
  
  async function callCampaigns(){
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
  }

  useEffect(() => {
    isConnected && callCampaigns()
    setLoading(false)
  }, [isConnected])
  


  return (
    <section className="cp-campaigns sc-padding fl-cl fl-c">
      <CategoryFilter/>
      {
        loading ? <p>{"Loading..."}</p> : 
          <CampaignGrid mapArray={campaigns}/>
      }
    </section>
  )
}
