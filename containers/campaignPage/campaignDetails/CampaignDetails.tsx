import { RewardCard } from "@/components/exportComps"

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
          <div className="cpd-rewards-container">
            <RewardCard/>
          </div>
        </div>
      </main>

      <aside className="cpd-info">
        <div className="cpd-alert">
          <div className="cpd-alert-title">{"Rewards aren't guaranteed."}</div>
          <p>{"Your pledge will support an ambitious creative project that has yet to be developed. There’s a risk that, despite a creator’s best efforts, your reward will not be fulfilled, and we urge you to consider this risk prior to pledging. Manger is not responsible for project claims or reward fulfillment."}</p>
          <div className="cpd-alert-faq">
            <h4>{"FREQUENTLY ASKED QUESTIONS"}</h4>
            <ul className="cpd-alert-faqs">
              <li>{"How do I pledge?"}</li>
              <li>{"Am I refunded if funding fails?"}</li>
              <li>{"If funding succeds how do I get my reward?"}</li>
            </ul>
          </div>
        </div>
      </aside>
    </section>
  )
}
