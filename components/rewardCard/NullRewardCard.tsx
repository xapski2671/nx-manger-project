import { BigNumber, ethers } from "ethers"
import { useContext, useState } from "react"
import { conn } from "@/types"
import { ConnectionContext } from "@/contexts/connection"
import crowdFunderABI from "@/constants/CrowdFunder.json"

interface props{
  address:string
}

export default function NullRewardCard({ address }:props) {
  const [inp, setInp] = useState("")
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
        <div className="rc-reward-id fl-cc">{"Pledge without a reward"}</div>
      </div>

      <div className="rc-input-container fl-bl fl-sb">
        <div className="rc-input">
          <p>{"Pledge amount"}</p>
          <div className="rc-fund-container fl-cl">
            <div className="rc-inp fl-cl fl-sb">
              <p className="rc-inp-curr">{"ETH"}</p>
              <input type="number" onChange={(e)=>{setInp(e.target.value)}} value={inp}/>
            </div>
          </div>
        </div>
        {!inp ? <p>{""}</p> : <button className="rc-cta" onClick={()=>{handleFund(ethers.utils.parseEther(inp))}}>{`Donate ${inp} ETH`}</button>}
      </div>
    </div>
  )
}
