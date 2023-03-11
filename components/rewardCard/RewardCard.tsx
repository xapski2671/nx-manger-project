import { useContext, useEffect, useState } from "react"
import DOMPurify from "dompurify"
import { conn, rwd } from "@/types"
import { ConnectionContext } from "@/contexts/connection"
import { BigNumber, ethers } from "ethers"
import campaignABI from "@/constants/Campaign.json"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"


interface props {
  address:string
  id:number
}

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


export default function RewardCard({ address, id }:props) {
  const { isConnected, signer }:conn = useContext(ConnectionContext)!
  const [loading, setLoading] = useState(true)
  const [rwdDetails, setRwdDetails] = useState<rwd>(rwdObj)

  useEffect(()=>{
    let isIn = true

    async function startCard(){
      const campaign = await new ethers.Contract(address, campaignABI.abi, signer)
      try {
        const reward = await campaign.rewards(!id ? ethers.utils.parseEther("0") : ethers.utils.parseEther(id.toString()))
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

  return (
    <div className="rc-container fl-tl fl-c">
      <div className="rc-id-del fl-tc fl-sb">
        <div className="rc-reward-id fl-cc">{`Pledge ${loading ? "0" : ethers.utils.formatEther(rwdDetails.price)} ETH`}</div>
        <div className="rc-reward-del fl-bl fl-c">
          <p>{"EST. DELIVERY"}</p>
          <p>{loading ? "" : rwdDetails.delDate.toString()}</p>
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

      <div className="rc-input-container fl-bl fl-sb">
        <div className="rc-input">
          <p>{"Bonus support (optional)"}</p>
          <div className="rc-fund-container fl-cl">
            <div className="rc-inp fl-cl fl-sb">
              <p className="rc-inp-curr">{"ETH"}</p>
              <input type="number" />
            </div>
          </div>
        </div>
        <button className="rc-cta">{`Pledge ${loading ? "0" : ethers.utils.formatEther(rwdDetails.price)} ETH`}</button>
      </div>
    </div>
  )
}
