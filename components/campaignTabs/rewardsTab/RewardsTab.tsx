import { RewardCard } from "@/components/exportComps"
import { BigNumber, ethers } from "ethers"
import { useContext, useEffect, useState } from "react"
import campaignABI from "@/constants/Campaign.json"
import { conn } from "@/types"
import { ConnectionContext } from "@/contexts/connection"


interface props{
  address: string
}

export default function RewardsTab({ address }:props) {
  const { isConnected, signer, account }:conn = useContext(ConnectionContext)!
  const [rwIds, setRwIds] = useState<any>([])


  async function modArray(arr:BigNumber[]){
    let strKeyArr = await arr.map((id:BigNumber)=>{ return ethers.utils.formatEther(id)}) // to string
    console.log(strKeyArr)
    let uniqueKeys:any[] = [...new Set(strKeyArr)] // remove duplicates
    console.log(uniqueKeys)
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
        console.log(fetchKeysTx)
        const ids = await modArray(fetchKeysTx)
        if(ids !== rwIds){isIn && setRwIds(ids)}
        console.log(ids)
      } catch (error) {
        console.log(error)
      }
    }
    isIn && isConnected && startRewardsTab().catch(e=>console.log(e))
    return ()=>{isIn = false}
  },[isConnected])

  return (
    <div className="cpd-tab rt-container fl-tl fl-c">
      <div className="rt-title">
        <h2>{"SELECT YOUR REWARD"}</h2>
        <p>{"Select an option below"}</p>
      </div>
      <div className="rt-rewards-container fl-tl fl-c">
        {
          !rwIds || !rwIds.length || !typeof(rwIds[0] == "number") ? <p>{"loading.."}</p> : rwIds.map((rId:number, index:number)=>{
            return (
              <RewardCard address={address} id={rId} key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}
