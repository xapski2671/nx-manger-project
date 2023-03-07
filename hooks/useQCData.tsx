import { GET_CAMPAIGN_DETAILS, GET_USERNAME } from "@/constants/subgraphQueries"
import { ConnectionContext } from "@/contexts/connection"
import { conn } from "@/types"
import { truncateStr } from "@/utils/truncateStr"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { useContext, useEffect, useState } from "react"

export function useQCData(cAddress:string, creator:string){
  const { isConnected, signer }:conn = useContext(ConnectionContext)!
  const [creatorVal, setCreatorVal] = useState("")
  const [cDetails, setCDetails] = useState(null)

  useEffect(()=>{
    async function getUserDetails(){
      const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_SUBGRAPH_URI,
        cache: new InMemoryCache(),
      })
      
      const userData = await client
        .query({
          query: GET_USERNAME,
          variables: { userAddress: creator ? creator : "0x00000000000000000000000000000000000000000" }
        })
        .then(async (data) => {return data.data.userAdded})
        .catch(err => console.log("Error fetching data: ", err))
      if( userData == null || userData.username == null){setCreatorVal(truncateStr(creator ? creator : "0x00000000000000000000000000000000000000000", 10))}
      else{setCreatorVal(userData.username)}
    }
  
    getUserDetails().catch(e=>console.log(e))
  },[isConnected])

  useEffect(()=>{
    async function getCmpData(){
      const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_SUBGRAPH_URI,
        cache: new InMemoryCache(),
      })

      const cDets = await client
        .query({
          query: GET_CAMPAIGN_DETAILS,
          variables: { campaignAddress: cAddress }
        })
        .then(async (data) => data.data.campaignAdded)
        .catch(err => console.log("Error fetching data: ", err))
      
      cDets && setCDetails(cDets)
    }

    getCmpData().catch(e=>console.log(e))
  },[isConnected])

  return {
    creatorVal,
    cDetails
  }
}

