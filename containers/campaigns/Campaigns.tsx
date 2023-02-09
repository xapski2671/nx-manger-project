import { CampaignGrid, CategoryFilter } from "@/components/exportComps"

export default function Campaigns() {
  return (
    <section className="cp-campaigns sc-padding fl-cl fl-c">
      <CategoryFilter/>
      <CampaignGrid/>
    </section>
  )
}
