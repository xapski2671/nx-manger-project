import { useContext, useEffect, useState } from "react"
import { BigNumber, ethers } from "ethers"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import useRwdCard from "@/hooks/useRwdCard"
import { conn } from "@/types"
import { ConnectionContext } from "@/contexts/connection"
import crowdFunderABI from "@/constants/CrowdFunder.json"


interface props {
  address:string
  id:number
}


export default function RewardCard({ address, id }:props) {
  const { loading, setLoading, rwdDetails, deliDate, shipping } = useRwdCard(address, id)
  const { isConnected, signer }:conn = useContext(ConnectionContext)!

  async function handleFund(donation:BigNumber){
    const crowdfunder = new ethers.Contract(crowdFunderABI.address, crowdFunderABI.abi, signer)
    try {
      const donateTx = await crowdfunder.donateToCampaign(address,{ value:donation })
      const donateTxR = await donateTx.wait(1)
      console.log("successfully donated")
    } catch (error) {
      console.log(error)      
    }
  }

  return (
    <div className="rc-container fl-tl fl-c">
      <div className="rc-id-del fl-tc fl-sb">
        <div className="rc-reward-id fl-cc">{`Pledge ${loading ? "0" : ethers.utils.formatEther(rwdDetails.price)} ETH`}</div>
        <div className="rc-reward-del fl-bl fl-c">
          <p>{"EST. DELIVERY"}</p>
          <p>{loading ? "" : deliDate}</p>
        </div>
      </div>

      <article className="rc-details fl-tl fl-c">
        <h3 className="rc-title">{loading ? <Skeleton style={{ "width": "15vw" }}/> : rwdDetails.title}</h3>
        <p className="rc-description">{loading ? <Skeleton style={{ "width": "60%" }}/> : rwdDetails.description}</p>
        <div className="rc-perks-container">
          <h5>{"INCLUDES"}</h5>
          <ul className="rc-perks fl-tl fl-c">
            {
              loading || !rwdDetails.perks.length ? <Skeleton style={{ "width": "60%" }} count={3}/>
                : rwdDetails.perks.map((perk, index)=>{
                  return (
                    <li key={index}>{perk}</li>
                  )
                })
            }
          </ul>
        </div>
      </article>

      <div className="rc-input-container fl-bl fl-sb">
        {/* <div className="rc-input">
          <p>{"Bonus support (optional)"}</p>
          <div className="rc-fund-container fl-cl">
            <div className="rc-inp fl-cl fl-sb">
              <p className="rc-inp-curr">{"ETH"}</p>
              <input type="number" />
            </div>
          </div>
        </div> */}
        { shipping ?
          <div className="rc-reward-del fl-tl fl-c">
            <p>{"SHIPS TO"}</p>
            <div className="fl-tl">
              {Array.isArray(shipping) ? shipping.map((shipLoc:string, index:number)=>{return <p key={index}>{shipLoc}</p>}) : <p>{shipping}</p>}
            </div>
          </div>
          : <p>{""}</p>
        }
        <button className="rc-cta" onClick={()=>{handleFund(rwdDetails.price)}}>{`Donate ${loading ? "" : ethers.utils.formatEther(rwdDetails.price)} ETH`}</button>
      </div>
    </div>
  )
}
