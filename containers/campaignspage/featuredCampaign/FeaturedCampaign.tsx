import { useCdata } from "@/hooks/useCdata"
import { useQCData } from "@/hooks/useQCData"
import { useURIData } from "@/hooks/useURIData"
import { faEthereum } from "@fortawesome/free-brands-svg-icons"
import { faCubes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ethers } from "ethers"
import Link from "next/link"
import { useRouter } from "next/router"
import ReactLoading from "react-loading"
import Skeleton from "react-loading-skeleton"


interface props{
  address: string
}

export default function FeaturedCampaign({ address }:props) {
  const router = useRouter()
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
  const { creatorVal, cDetails, dLoading } = useQCData(address, campaignDetails.creator)

  return (
    <section className="fc-container fl-tl">
      <div className="fc-bg">
        <img src={imageURI} alt="cc-mckp" onLoad={()=>{setImgLoad(true)}} style={!imgLoad ? { "display": "none" } : {}}/>
        <div className="fc-bg-grad"></div>
      </div>

      <div className="fc-img">
        {!imgLoad && <Skeleton style={{ "height":"21vw", "width":"44vw", "borderRadius":"15px" }}/>}
        <img src={imageURI} alt="cc-mckp" onLoad={()=>{setImgLoad(true)}} style={!imgLoad ? { "display": "none" } : {}}/>
      </div>

      <div className="fc-details fl-tl fl-c">
        <div className="fc-cta fl-tc fl-sb">
          <div className="fc-cat-name fl-cl">
            <FontAwesomeIcon icon={faCubes} className="fc-cat-icon"/>
            {loading ? <Skeleton style={{ "width": "4vw" }}/> : campaignDetails.category}
          </div>
          <Link href={`/campaigns/campaign/${address}`}><button className="fl-fc">{"Learn more..."}</button></Link>
        </div>

        <div className="fc-camp-title fl-tl fl-c">
          <h4>{loading ? <Skeleton style={{ "width": "10vw" }}/> : campaignDetails.title}</h4>
          <p>{loading ? <Skeleton count={2} style={{ "width": "9vw" }}/> : campaignDetails.description}</p>
        </div>

        <div className="fc-status-container fl-tl fl-c">
          <div className="fc-progress-bar"><div className="fc-progress-level" style={{ "width":`${progress}%` }}></div></div>

          <div className="fc-status fl-cl fl-sb">

            <div className="fc-amounts fl-tl fl-c">
              <div className="fc-amt-raised fl-cl">
                <FontAwesomeIcon icon={faEthereum} className="fc-curr-icon"/>
                <p className="fc-amt-figure">{ethers.utils.formatEther(campaignDetails.currentBalance)}</p>
                <p className="fc-amt-curr">{"ETH"}</p>
              </div>
              <div className="fc-goal">
                {`raised out of ${ethers.utils.formatEther(campaignDetails.goalAmount)} ETH`}
              </div>
            </div>
          
            <div className="fc-percent fl-bl fl-c">
              <p>{ dLoading ? 0 : cDetails.funderCount}</p>
              <p>{"backers"}</p>
            </div>

            <div className="fc-percent fl-bl fl-c">
              <p>{daysUntil}</p>
              <p>{"days to go"}</p>
            </div>
          </div>
        </div>

        <div className="fc-creator-eta fl-cl fl-sb">
          <div className="fc-creator fl-cl">
            <div className="fc-creator-jazzicon"></div>
            <p>{creatorVal}</p>
          </div>
          <button className="fc-fund-cta" onClick={()=>{router.push(`/campaigns/campaign/${address}`)}}>{"Checkout this project"}</button>
        </div>
      </div>
    </section>
  )
}
