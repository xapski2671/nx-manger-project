import { CampaignCard } from "../exportComps"

export default function CampaignGrid() {
  return (
    <div className="cg-container fl-tl fl-c">
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
