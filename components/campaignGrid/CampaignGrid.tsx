import { CampaignCard } from "../exportComps"

interface props {
  mapArray: Array<Object>
}

interface CmpObject {
  campaignAddress?: string
  creator?: string
}

export default function CampaignGrid({ mapArray }:props) {

  return (
    <div className="cg-container fl-cl fl-c">
      <div className="cg-grid">
        {
          mapArray.map((cmpObj, index)=>{
            const { campaignAddress, creator }:CmpObject = cmpObj
            return (
              <CampaignCard key={index} address={campaignAddress} creator={creator}/>
            )
          })
        }
      </div>
      <button className="cg-see-more fl-cc">{"See more"}</button>
    </div>
  )
}
