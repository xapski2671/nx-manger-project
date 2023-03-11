import { RewardsTab, SideNotice, SideBio, StoryTab, RisksTab, PaymentTab } from "@/components/exportComps"
import { useState } from "react"

interface props{
  address: string
}

function TabTitle(){}

export default function CampaignDetails({ address }: props) {
  const [activeTab, setActiveTab] = useState("REWARDS")

  return (
    <section className="cpd-section sc-padding fl-tc">
      <main className="cpd-trajectory">
        <div className="cpd-title-bar">
          <div className="cpd-tab-titles fl-cc">
            <div className={`cpd-tab-title ${activeTab == "STORY" && "cpd-active-tab"}`} onClick={()=>{setActiveTab("STORY")}}>{"STORY"}</div>
            <div className={`cpd-tab-title ${activeTab == "RISKS" && "cpd-active-tab"}`} onClick={()=>{setActiveTab("RISKS")}}>{"RISKS"}</div>
            <div className={`cpd-tab-title ${activeTab == "REWARDS" && "cpd-active-tab"}`} onClick={()=>{setActiveTab("REWARDS")}}>{"REWARDS"}</div>
            <div className={`cpd-tab-title ${activeTab == "PAYMENT" && "cpd-active-tab"}`} onClick={()=>{setActiveTab("PAYMENT")}}>{"PAYMENT"}</div>
          </div>
          <div className="cpd-separator"></div>
        </div>
       
        <>
          {activeTab == "STORY" && <StoryTab/>}
          {activeTab == "RISKS" && <RisksTab/>}
          {activeTab == "REWARDS" && <RewardsTab address={address}/>}
          {activeTab == "PAYMENT" && <PaymentTab/>}
        </>
      </main>

      <aside className="cpd-info">
        {activeTab == "REWARDS" ? <SideNotice/> : <SideBio/>}
      </aside>
    </section>
  )
}
