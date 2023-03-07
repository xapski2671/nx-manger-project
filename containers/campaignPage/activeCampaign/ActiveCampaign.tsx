import { faEthereum, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faCubes, faGlobe, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ethers } from "ethers"
import { useContext, useEffect, useState } from "react"
import campaignABI from "@/constants/Campaign.json"
import { conn } from "@/types"
import { ConnectionContext } from "@/contexts/connection"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { useCdata } from "@/hooks/useCdata"
import { useQCData } from "@/hooks/useQCData"



interface props{
  address: string
}

export default function ActiveCampaign({ address }: props) {
  const { isConnected, signer }:conn = useContext(ConnectionContext)!
  const {    
    loading,
    campaignDetails,
    imageURI,
    imgLoad,
    setImgLoad,
    progress,
    daysUntil,
    deadlineStatement
  } = useCdata(address)
  const { creatorVal, cDetails } = useQCData(address, campaignDetails.creator)


  const [cdata, setCdata] = useState<any>()
  const [fcLoading, setFcLoading] = useState(true)


  useEffect(()=>{
    let isIn = true

    async function start(){
      const cmpCntrt = new ethers.Contract(address, campaignABI.abi, signer)
      let cmpd
      try{
        const uri = await cmpCntrt.s_campaignURI()
        const httpUri = uri.replace("ipfs://", "https://ipfs.io/ipfs/")
        cmpd = await fetch(httpUri).then(res => res.json()).then(data => data).catch(e=>console.log(e))
        isIn && setCdata(cmpd)
        isIn && setFcLoading(false)
      }catch(e){console.log(e)}
    }

    isConnected && start().catch(e=>console.log(e))
    return () => {isIn = false}
  },[isConnected])


  
  return (
    <section className="acp-section sc-padding fl-cl">
      <div className="acp-img fl-cc">
        {!imgLoad && <Skeleton style={{ "height": "100%", "borderRadius": "1.39vw 1.39vw 0 0" }}/>}
        <img src={imageURI} alt="cc-mckp" onLoad={()=>{setImgLoad(true)}} style={!imgLoad ? { "display": "none" } : {}}/>
      </div>

      <div className="acp-details fl-tl fl-c">

        <div className="acp-camp-title fl-tl fl-c">
          <h4>{loading ? <Skeleton/> : campaignDetails.title}</h4>
          <p>{loading ? <Skeleton count={2}/> : campaignDetails.description}</p>
        </div>

        <div className="acp-status-container fl-tl fl-c">
          <div className="acp-progress-bar"><div className="acp-progress-level" style={{ "width":`${progress}%` }}></div></div>

          <div className="acp-status fl-cl fl-sb">

            <div className="acp-amounts fl-tl fl-c">
              <div className="acp-amt-raised fl-cl">
                <FontAwesomeIcon icon={faEthereum} className="acp-curr-icon"/>
                <p className="acp-amt-figure">{ethers.utils.formatEther(campaignDetails.currentBalance)}</p>
                <p className="acp-amt-curr">{"ETH"}</p>
              </div>
              <div className="acp-goal">
                {`raised out of ${ethers.utils.formatEther(campaignDetails.goalAmount)} ETH`}
              </div>
            </div>
          
            <div className="acp-percent fl-bl fl-c">
              <p>{ !cDetails ? 0 : cDetails.funderCount}</p>
              <p>{"backers"}</p>
            </div>

            <div className="acp-percent fl-bl fl-c">
              <p>{daysUntil}</p>
              <p>{"days to go"}</p>
            </div>
          </div>
        </div>

        <button className="acp-fund-cta">{"Fund this project"}</button>

        <div className="acp-bio fl-cl fl-sb">
          <div className="acp-bio-native fl-cl">
            <div className="acp-cat-name fl-cl">
              <FontAwesomeIcon icon={faCubes} className="acp-cat-icon"/>
              {campaignDetails.category}
            </div>
            <div className="acp-creator fl-cl">
              <img src="/assets/manger_bio_logo.svg" alt="bio-logo" />
              <p>{creatorVal}</p>
            </div>
          </div>

          <div className="acp-bio-socials fl-cr">
            <FontAwesomeIcon icon={faTwitter} className="acp-social-icon"/>
            <FontAwesomeIcon icon={faGlobe} className="acp-social-icon"/>
            <FontAwesomeIcon icon={faShareNodes} className="acp-social-icon"/>
          </div>
        </div>

        <div className="acp-info">
          <p>{`All or nothing. This project will only be funded if it reaches its goal by ${deadlineStatement} CET.`}</p>
        </div>
      </div>
    </section>
  )
}
