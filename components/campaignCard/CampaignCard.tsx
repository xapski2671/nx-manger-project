import { faEthereum } from "@fortawesome/free-brands-svg-icons"
import { faCubes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import campaignABI from "@/constants/Campaign.json"
import { ConnectionContext } from "@/contexts/connection"
import { cmp, conn } from "@/types"
import { ethers } from "ethers"

interface props{
  address: string
  creator: string
}

let cmpObject:cmp = {
  creator: "",
  title: "",
  description: "",
  category: "",
  tags: [],
  goalAmount: BigInt("0"),
  duration: BigInt("0"),
  currentBalance: BigInt("0"),
  state: 0,
  imageURI: "",
  campaignURI: "",
  deadline: BigInt("0")
}

const deci = BigInt("1000000000000000000").valueOf()

export default function CampaignCard({ address, creator }:props) {
  const { hasMetamask, isConnected, chainId, signer, account, connect }:conn = useContext(ConnectionContext)!
  const [loading, setLoading] = useState(true)
  const [campaignDetails, setCampaignDetails] = useState<cmp>()

  useEffect(() => {
    async function startCard(){
      const CmpCntrt = new ethers.Contract(address, campaignABI.abi, signer)
      try{
        const cmpData = await CmpCntrt.getCampaignDetails()
        let cmpProxy:cmp | any = {}
        for(let i = 0; i < cmpData.length; i++){
          cmpProxy[(Object.keys(cmpObject)[i])] = cmpData[i]
        }
        setCampaignDetails(cmpProxy)
        setLoading(false)
        console.log(cmpProxy.creator)
      }
      catch(e){console.log(e)}
    }    
    isConnected && startCard()
  }, [isConnected])

  return (
    <div className="cc-container fl-cl fl-c">
      { !loading &&
 <>
   <div className="cc-img">
     <img src="/assets/manger-mockup-cmp.jpg" alt="cc-mckp" />
   </div>

   <div className="cc-details fl-cl fl-c">
     <div className="cc-cta fl-tc fl-sb">
       <div className="cc-cat-name fl-cl">
         <FontAwesomeIcon icon={faCubes} className="cc-cat-icon"/>
         {campaignDetails?.category}
       </div>
       <button className="fl-cc">{"Learn more..."}</button>
     </div>

     <div className="cc-camp-title fl-tl fl-c">
       <h4>{"Dive Into The Metaverse"}</h4>
       <p>{"Take a surreal dive into the beautiful world of web3, and have fun."}</p>
     </div>

     <div className="cc-status fl-cl fl-sb">
       <div className="cc-amounts fl-tl fl-c">
         <div className="cc-amt-raised fl-cl">
           <FontAwesomeIcon icon={faEthereum} className="cc-curr-icon"/>
           <p className="cc-amt-figure">{ethers.parseUnits(campaignDetails!.currentBalance.toString(), "ether").toString()}</p>
           <p className="cc-amt-curr">{"ETH"}</p>
         </div>
         <div className="cc-goal">
           {`raised out of ${ethers.parseUnits(campaignDetails!.goalAmount.toString(), "ether").toString()} ETH`}
         </div>
       </div>

       <div className="cc-progress-bar"><div className="cc-progress-level"></div></div>
        
       <div className="cc-percent fl-bl fl-c">
         <p>{"3596%"}</p>
         <p>{"funded"}</p>
       </div>
     </div>

     <div className="cc-creator-eta fl-cl fl-sb">
       <div className="cc-creator fl-cl">
         <div className="cc-creator-jazzicon"></div>
         <p>{"bullishmei"}</p>
       </div>
       <div className="cc-eta fl-tr">
         <p>{"13"}</p>
         <p>{"days to go"}</p>
       </div>
     </div>
   </div>
 </>}
    </div>
  )
}
