import { ethers } from "ethers"
import { useContext, useEffect, useState } from "react"
import campaignABI from "@/constants/Campaign.json"
import { conn } from "@/types"
import { ConnectionContext } from "@/contexts/connection"

export function useURIData(address:string){
  const { isConnected, signer }:conn = useContext(ConnectionContext)!
  const [cdata, setCdata] = useState<any>()
  const [fcLoading, setFcLoading] = useState(true)


  useEffect(()=>{
    let isIn = true

    async function start(){
      const cmpCntrt = new ethers.Contract(address, campaignABI.abi, signer)
      let cmpd
      try{
        const uri = await cmpCntrt.s_campaignURI()
        const httpUri = uri.replace("ipfs://", "https://ipfs.io/ipfs/")
        cmpd = await fetch(httpUri).then(res => res.json()).then(data => data).catch(e=>console.log(e))
        isIn && setCdata(cmpd)
        isIn && setFcLoading(false)
      }catch(e){console.log(e)}
    }

    isConnected && start().catch(e=>console.log(e))
    return () => {isIn = false}
  },[isConnected])

  return {
    fcLoading,
    cdata
  }
}