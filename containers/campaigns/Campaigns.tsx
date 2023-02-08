import { CategoryFilter, CategoryGrid } from "@/components/exportComps"

export default function Campaigns() {
  return (
    <section className="cp-campaigns sc-padding fl-cl fl-c">
      <CategoryFilter/>
      <CategoryGrid/>
      <button className="cp-see-more">{"See more"}</button>
    </section>
  )
}
