import { RewardCard } from "@/components/exportComps"

export default function RewardsTab() {
  return (
    <div className="cpd-tab rt-container fl-tl fl-c">
      <div className="rt-title">
        <h2>{"SELECT YOUR REWARD"}</h2>
        <p>{"Select an option below"}</p>
      </div>
      <div className="rt-rewards-container fl-tl fl-c">
        <RewardCard/>
        <RewardCard/>
        <RewardCard/>
      </div>
    </div>
  )
}
