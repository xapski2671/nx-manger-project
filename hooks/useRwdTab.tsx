import { ConnectionContext } from "@/contexts/connection"
import { conn, rwd } from "@/types"
import { BigNumber, ethers } from "ethers"
import { useContext, useEffect, useState } from "react"
import campaignABI from "@/constants/Campaign.json"

export default function useRwdTab(address:string) {
  const { isConnected, signer, account }:conn = useContext(ConnectionContext)!
  const [loading, setLoading] = useState(true)
  const [rwIds, setRwIds] = useState<any>([])


  async function modArray(arr:BigNumber[]){
    let strKeyArr = await arr.map((id:BigNumber)=>{return ethers.utils.formatEther(id)}) // to string
    let uniqueKeys:any[] = [...new Set(strKeyArr)] // remove duplicates
    let newKeyArr:any[] = await uniqueKeys.map((id:string)=>{return parseFloat(id)}) // to number
    let readyArr = await newKeyArr.sort((a, b)=> (a - b)) // sort in incrreasing order
    return readyArr
  }

  useEffect(()=>{
    let isIn = true
    async function startRewardsTab(){
      const campaign = new ethers.Contract(address, campaignABI.abi, signer)
      console.log(address)
      try {
        let fetchKeysTx = await campaign.getRewardKeys()
        const ids = await modArray(fetchKeysTx)
        if(ids !== rwIds){
          isIn && setRwIds(ids)
          isIn && setLoading(false)
        }

      } catch (error) {
        console.log(error)
      }
    }
    isIn && isConnected && startRewardsTab().catch(e=>console.log(e))
    return ()=>{isIn = false}
  },[isConnected])

  return (
    {
      loading,
      rwIds
    }
  )
}
