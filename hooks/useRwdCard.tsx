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

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

export default function useRwdCard(address:string, id:number) {
  const { isConnected, signer }:conn = useContext(ConnectionContext)!
  const [loading, setLoading] = useState(true)
  const [rwdDetails, setRwdDetails] = useState<rwd>(rwdObj)
  const [deliDate, setDeliDate] = useState("")
  const [shipping, setShipping] = useState<any>(null)

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

          let deli = new Date(rwdProxy.delDate.toNumber() * 1000)
          const deliMon = month[deli.getMonth()]
          const deliYr = deli.getFullYear()
          !deliDate.includes(deliMon) && setDeliDate(`${deliMon} ${deliYr}`) 

          if(rwdProxy.shipsTo[0] == "_NW"){setShipping(null)}
          else if(rwdProxy.shipsTo[0] == "_AITW"){setShipping("Anywhere in the world")}
          else{setShipping(rwdProxy.shipsTo)}
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
    rwdDetails,
    deliDate,
    shipping
  }
}
