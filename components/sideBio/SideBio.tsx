import { CampaignContext } from "@/contexts/currentCampaign"
import { useCdata } from "@/hooks/useCdata"
import { useQCData } from "@/hooks/useQCData"
import { truncateStr } from "@/utils/truncateStr"
import { faEthereum, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGlobe, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useContext, useState } from "react"

export default function SideBio() {
  const { currAddress } = useContext(CampaignContext)!
  const { campaignDetails } = useCdata(currAddress)
  const { creatorVal, userDets } = useQCData(currAddress, campaignDetails.creator)
  const [donAmount, setDonAmount] = useState("")

  return (
    <div className="sb-container fl-tl fl-c">
      <div className="sb-bio fl-tl fl-c">
        <h4 className="sb-bio-heading">{"Creator"}</h4>

        <div className="sb-bio-details fl-tl">
          <div className="sb-creator-jazzicon"></div>
          <div className="sb-creator-details fl-tl fl-c">
            <div className="sb-creator-address fl-cl">
              <FontAwesomeIcon icon={faEthereum} className="sb-bio-curr-icon"/>
              <p>{truncateStr(campaignDetails.creator, 10)}</p>
            </div>
            <p className="sb-creator-name">{creatorVal}</p>
          </div>
        </div>

        <div className="sb-creator-socials fl-cl">
          <Link href={!userDets || !userDets.twitter ? "#" : userDets.twitter }>
            <FontAwesomeIcon icon={faTwitter} className="sb-social-icon"/>
          </Link>
          <FontAwesomeIcon icon={faShareNodes} className="sb-social-icon"/>
        </div>

        <p className="sb-creator-bio">{userDets ? userDets.bio : ""}</p>
      </div>

      <div className="sb-support fl-tl fl-c">
        <h4 className="sb-support-heading">{"Support"}</h4>
        <div className="sb-support-box fl-tl fl-c">
          <h4 className="sb-support-box-heading">{"Pledge without a reward"}</h4>

          <div className="sb-input fl-cl">
            <p>{"ETH"}</p>
            <input type="number" onChange={(e)=>{setDonAmount(e.target.value)}} value={donAmount}/>
          </div>

          <div className="sb-support-info">
            <h4>{"Back it because you believe in it."}</h4>
            <p>{"Support the project for no reward, just because it speaks to you."}</p>
          </div>
          
          <button className="sb-fund-cta">{!donAmount ? "Fund this project" : `Donate ${donAmount} ETH`}</button>
        </div>
      </div>
    </div>
  )
}
