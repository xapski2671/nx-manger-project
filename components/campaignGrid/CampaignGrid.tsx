import { CampaignCard } from "../exportComps"

interface props {
  mapArray: Array<Object>
}

export default function CampaignGrid({ mapArray }:props) {
  console.log(mapArray)

  return (
    <div className="cg-container fl-cl fl-c">
      <div className="cg-grid">
        <CampaignCard/>
        <CampaignCard/>
        <CampaignCard/>
        <CampaignCard/>
        <CampaignCard/>
        <CampaignCard/>
      </div>
      <button className="cg-see-more fl-cc">{"See more"}</button>
    </div>
  )
}
