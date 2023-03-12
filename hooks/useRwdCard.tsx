import { ConnectionContext } from "@/contexts/connection"
import { conn, rwd } from "@/types"
import { BigNumber, ethers } from "ethers"
import { useContext, useEffect, useState } from "react"
import campaignABI from "@/constants/Campaign.json"


let rwdObj:rwd = {
  price: BigNumber.from("0"),
  title: "",
  description: "",
  perks: [],
  delDate: BigNumber.from("0"),
  quantity: BigNumber.from("0"),
  infinite: true,
  shipsTo: []
}

export default function useRwdCard(address:string, id:number) {
  const { isConnected, signer }:conn = useContext(ConnectionContext)!
  const [loading, setLoading] = useState(true)
  const [rwdDetails, setRwdDetails] = useState<rwd>(rwdObj)

  useEffect(()=>{
    let isIn = true

    async function startCard(){
      const campaign = await new ethers.Contract(address, campaignABI.abi, signer)
      try {
        const reward = await campaign.getReward(!id ? ethers.utils.parseEther("0") : ethers.utils.parseEther(id.toString()))
        console.log(reward)
        if(reward[0] !== BigNumber.from("0")){
          let rwdProxy:rwd | any = {}
          for(let i = 0; i < reward.length; i++){
            rwdProxy[(Object.keys(rwdObj)[i])] = reward[i]
          }
          isIn && setRwdDetails(rwdProxy)
          isIn && setLoading(false)
        }
      } catch (error) {
        console.log(error)        
      }
    }

    isIn && isConnected && startCard().catch(e=>console.log(e))
    return () => {isIn = false}
  },[isConnected])


  return {
    loading,
    setLoading,
    rwdDetails
  }
}
