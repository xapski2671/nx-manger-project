import { RewardsTab, SideNotice } from "@/components/exportComps"
import SideBio from "@/components/sideBio/SideBio"

export default function CampaignDetails() {
  return (
    <section className="cpd-section fl-tc">
      <main className="cpd-trajectory">
        <div className="cpd-title-bar">
          <div className="cpd-tab-titles fl-cc">
            <div className="cpd-tab-title">{"STORY"}</div>
            <div className="cpd-tab-title">{"RISKS"}</div>
            <div className="cpd-tab-title cpd-active-tab">{"REWARDS"}</div>
            <div className="cpd-tab-title">{"PAYMENT"}</div>
          </div>
          <div className="cpd-separator">
            {/* <div className="cpd-active-tab-indic"></div> */}
          </div>
        </div>

        <RewardsTab/>
      </main>

      <aside className="cpd-info">
        {/* <SideNotice/> */}
        <SideBio/>
      </aside>
    </section>
  )
}
