import Link from "next/link"
import { CampaignCard } from "../exportComps"

interface props {
  mapArray: Array<CmpObject>
}

interface CmpObject {
  campaignAddress: string
  creator: string
}

export default function CampaignGrid({ mapArray }:props) {

  return (
    <div className="cg-container fl-cl fl-c">
      <div className="cg-grid">
        {
          !mapArray || !mapArray.length ? <p>{" "}</p> : mapArray.map((cmpObj, index)=>{
            const { campaignAddress, creator }:CmpObject = cmpObj
            return (
              <CampaignCard key={index} address={campaignAddress} creator={creator}/>
            )
          })
        }
      </div>
      <Link href={"/campaigns"}><button className="cg-see-more fl-cc">{"See more"}</button></Link>
    </div>
  )
}
