import { ActiveCampaign, CampaignGrid, CategoryFilter } from "@/components/exportComps"

export default function CampaignsPage() {
  
  return (
    <section className="ccp-section sc-padding fl-cl fl-c">
      <CategoryFilter/>
      <ActiveCampaign/>
      <CampaignGrid/>
    </section>
  )
}
