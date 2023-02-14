import { ActiveCampaign, CampaignGrid, CategoryFilter } from "@/components/exportComps"

export default function CampaignsPage() {
  
  return (
    <section className="ccp-section sc-padding fl-cl fl-c">
      <CategoryFilter/>
      <h4 className="ccp-subtitle">{"Featured"}</h4>
      <ActiveCampaign/>
      <h4 className="ccp-subtitle">{"Explore 320 Projects"}</h4>
      <CampaignGrid/>
    </section>
  )
}
