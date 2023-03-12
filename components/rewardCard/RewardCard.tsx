import { useContext, useEffect, useState } from "react"
import { BigNumber, ethers } from "ethers"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import useRwdCard from "@/hooks/useRwdCard"


interface props {
  address:string
  id:number
}

export default function RewardCard({ address, id }:props) {
  const { loading, setLoading, rwdDetails, deliDate } = useRwdCard(address, id)

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
        <h3 className="rc-title">{loading ? <Skeleton style={{ "width": "40%" }}/> : rwdDetails.title}</h3>
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

      <div className="rc-input-container fl-br">
        {/* <div className="rc-input">
          <p>{"Bonus support (optional)"}</p>
          <div className="rc-fund-container fl-cl">
            <div className="rc-inp fl-cl fl-sb">
              <p className="rc-inp-curr">{"ETH"}</p>
              <input type="number" />
            </div>
          </div>
        </div> */}
        <button className="rc-cta">{`Pledge ${loading ? "0" : ethers.utils.formatEther(rwdDetails.price)} ETH`}</button>
      </div>
    </div>
  )
}
