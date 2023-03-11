import { useContext, useEffect, useState } from "react"
import DOMPurify from "dompurify"
import { conn, rwd } from "@/types"
import { ConnectionContext } from "@/contexts/connection"
import { BigNumber, ethers } from "ethers"
import campaignABI from "@/constants/Campaign.json"


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
        const reward = await campaign.rewards(ethers.utils.parseEther(id.toString()))
        let rwdProxy:rwd | any = {}
        for(let i = 0; i < reward.length; i++){
          rwdProxy[(Object.keys(rwdObj)[i])] = reward[i]
        }
        isIn && setRwdDetails(rwdProxy)
        isIn && setLoading(false)
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
        <div className="rc-reward-id fl-cc">{"Pledge 0.5 ETH"}</div>
        <div className="rc-reward-del fl-bl fl-c">
          <p>{"EST. DELIVERY"}</p>
          <p>{"Nov 2023"}</p>
        </div>
      </div>

      <article className="rc-details fl-tl fl-c">
        <h3 className="rc-title">{"Digital Edition"}</h3>
        <p className="rc-description">{"The Complete DIGITAL Spider-Squirrel Volume One Ultimate Edition!"}</p>
        <div className="rc-perks-container">
          <h5>{"INCLUDES"}</h5>
          <ul className="rc-perks fl-tl fl-c">
            <li>{"Digital Spider-Squirrel Vol.1 Ultimate Edition"}</li>
            <li>{"Digital Stretch Goals (As Unlocked)"}</li>
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
        <button className="rc-cta">{"Pledge 0.5 ETH"}</button>
      </div>
    </div>
  )
}
