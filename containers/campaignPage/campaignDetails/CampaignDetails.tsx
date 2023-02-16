import { RewardCard, SideNotice } from "@/components/exportComps"

export default function CampaignDetails() {
  return (
    <section className="cpd-section fl-tc">
      <main className="cpd-trajectory">
        <div className="cpd-tab-titles fl-cc">
          <h4 className="cpd-tab-title">{"STORY"}</h4>
          <h4 className="cpd-tab-title">{"RISKS"}</h4>
          <h4 className="cpd-tab-title">{"REWARDS"}</h4>
          <h4 className="cpd-tab-title">{"PAYMENT"}</h4>
        </div>
        <div className="cpd-separator"><div className="cpd-active-tab-indic"></div></div>

        <div className="cpd-tab cpd-tab-rewards fl-tl fl-c">
          <div className="cpd-tab-rewards-title">
            <h2>{"SELECT YOUR REWARD"}</h2>
            <p>{"Select an option below"}</p>
          </div>
          <div className="cpd-rewards-container fl-tl fl-c">
            <RewardCard/>
            <RewardCard/>
            <RewardCard/>
          </div>
        </div>
      </main>

      <aside className="cpd-info">
        <SideNotice/>
      </aside>
    </section>
  )
}
