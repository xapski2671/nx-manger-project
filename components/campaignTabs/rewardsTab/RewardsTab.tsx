import { NullRewardCard, RewardCard } from "@/components/exportComps"
import { BigNumber, ethers } from "ethers"
import { useContext, useEffect, useState } from "react"
import campaignABI from "@/constants/Campaign.json"
import { conn } from "@/types"
import { ConnectionContext } from "@/contexts/connection"
import useRwdTab from "@/hooks/useRwdTab"
import ReactLoading from "react-loading"
import { CampaignContext } from "@/contexts/currentCampaign"



export default function RewardsTab() {
  const { currAddress } = useContext(CampaignContext)!
  const { loading, rwIds } = useRwdTab(currAddress)

  return (
    <div className="cpd-tab rt-container fl-tl fl-c" id="r_rewards">
      <div className="rt-title">
        <h2>{"SELECT YOUR REWARD"}</h2>
        <p>{"Select an option below"}</p>
      </div>
      <div className="rt-rewards-container fl-tl fl-c">
        {
          loading || !rwIds || !rwIds.length || !typeof(rwIds[0] == "number") ? <ReactLoading type="bubbles" color="#C4A2E7"/> : 
            <>
              <NullRewardCard address={currAddress}/>
              {
                rwIds.map((rId:number, index:number)=>{
                  return (
                    <RewardCard address={currAddress} id={rId} key={index}/>
                  )
                })
              }
            </>
        }
      </div>
    </div>
  )
}
