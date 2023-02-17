import { RewardsTab, SideNotice } from "@/components/exportComps"
import SideBio from "@/components/sideBio/SideBio"

export default function CampaignDetails() {
  return (
    <section className="cpd-section fl-tc">
      <main className="cpd-trajectory">
        <div className="cpd-tab-titles fl-cc">
          <h4 className="cpd-tab-title">{"STORY"}</h4>
          <h4 className="cpd-tab-title">{"RISKS"}</h4>
          <h4 className="cpd-tab-title cpd-active-tab">{"REWARDS"}</h4>
          <h4 className="cpd-tab-title">{"PAYMENT"}</h4>
        </div>

        <div className="cpd-separator">
          {/* <div className="cpd-active-tab-indic"></div> */}
        </div>

        <RewardsTab/>
      </main>

      <aside className="cpd-info">
        <SideNotice/>
        {/* <SideBio/> */}
      </aside>
    </section>
  )
}
