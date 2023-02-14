import { CampaignGrid, CategoryFilter, FeaturedCampaign } from "@/components/exportComps"

export default function CampaignsPage() {
  
  return (
    <section className="ccp-section sc-padding fl-cl fl-c">
      <CategoryFilter/>
      <div className="ccp-sub-wrapper fl-cl">
        <h4 className="ccp-subtitle">{"Featured"}</h4>
      </div>
      <FeaturedCampaign/>
      <div className="ccp-sub-wrapper fl-cl">
        <h4 className="ccp-subtitle">{"Explore 320 Projects"}</h4>
      </div>
      <CampaignGrid/>
    </section>
  )
}
