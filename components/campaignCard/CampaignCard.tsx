import { faEthereum } from "@fortawesome/free-brands-svg-icons"
import { faCubes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { useCallback, useContext, useEffect, useState } from "react"
import campaignABI from "@/constants/Campaign.json"
import { ConnectionContext } from "@/contexts/connection"
import { cmp, conn } from "@/types"
import { BigNumber, ethers } from "ethers"
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import { GET_USERNAME } from "@/constants/subgraphQueries"
import { truncateStr } from "@/utils/truncateStr"
import Link from "next/link"
import { useCdata } from "@/hooks/useCdata"
import { useQCData } from "@/hooks/useQCData"

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
  goalAmount: BigNumber.from("0"),
  duration: BigNumber.from("0"),
  currentBalance: BigNumber.from("0"),
  state: 0,
  imageURI: "",
  campaignURI: "",
  deadline: BigNumber.from("0")
}

export default function CampaignCard({ address, creator }:props) {
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
    <div className="cc-container fl-cl fl-c">
      <div className="cc-img">
        {!imgLoad && <Skeleton style={{ "height": "100%", "borderRadius": "1.39vw 1.39vw 0 0" }}/>}
        <img src={imageURI} alt="cc-mckp" onLoad={()=>{setImgLoad(true)}} style={!imgLoad ? { "display": "none" } : {}}/>
      </div>

      <div className="cc-details fl-cl fl-c">
        <div className="cc-cta fl-tc fl-sb">
          <div className="cc-cat-name fl-cl">
            <FontAwesomeIcon icon={faCubes} className="cc-cat-icon"/>
            <Link href={`/campaigns${loading ? "" : "/"}${loading ? "" : campaignDetails.category}`}>{loading ? <Skeleton/> : campaignDetails.category}</Link>
          </div>
          <Link href={`/campaigns/campaign/${address}`}><button className="fl-cc">{"Learn more..."}</button></Link>
        </div>

        <div className="cc-camp-title fl-tl fl-c">
          <h4>{!loading ? campaignDetails.title : <Skeleton/>}</h4>
          <p>{!loading ? campaignDetails.description : <Skeleton count={2}/>}</p>
        </div>

        <div className="cc-status fl-cl fl-sb">
          <div className="cc-amounts fl-tl fl-c">
            <div className="cc-amt-raised fl-cl">
              <FontAwesomeIcon icon={faEthereum} className="cc-curr-icon"/>
              <p className="cc-amt-figure">{ethers.utils.formatEther(campaignDetails.currentBalance)}</p>
              <p className="cc-amt-curr">{"ETH"}</p>
            </div>
            <div className="cc-goal">
              {`raised out of ${ethers.utils.formatEther(campaignDetails.goalAmount)} ETH`}
            </div>
          </div>

          <div className="cc-progress-bar"><div className="cc-progress-level" style={{ "width": `${progress}%` }}></div></div>
        
          <div className="cc-percent fl-bl fl-c">
            <p>{`${progress}%`}</p>
            <p>{"funded"}</p>
          </div>
        </div>

        <div className="cc-creator-eta fl-cl fl-sb">
          <div className="cc-creator fl-cl">
            <div className="cc-creator-jazzicon"></div>
            <p>{creatorVal}</p>
          </div>
          <div className="cc-eta fl-tr">
            <p>{daysUntil}</p>
            <p>{"days to go"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
