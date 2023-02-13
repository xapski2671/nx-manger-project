import { ActiveCampaign, CampaignGrid, CategoryFilter } from "@/components/exportComps"

export default function CampaignsPage() {
  
  return (
    <section className="ccp-section sc-padding fl-cl fl-c">
      <CategoryFilter/>
      <h4>{"Featured"}</h4>
      <ActiveCampaign/>
      <h4>{"Explore 320 Projects"}</h4>
      <CampaignGrid/>
    </section>
  )
}
