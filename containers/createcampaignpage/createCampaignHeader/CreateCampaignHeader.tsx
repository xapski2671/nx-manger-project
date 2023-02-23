export default function CreateCampaignHeader() {
  return (
    <section className="cch-section sc-padding fl-tl fl-c">
      <h2 className="cch-section-title">{"Campaign Editor"}</h2>
      <div className="cch-nav fl-cl">
        <h3 className="cch-tab-title">{"Profile"}</h3>
        <h3 className="cch-tab-title cch-active-tab">{"Basics"}</h3>
        <h3 className="cch-tab-title">{"Content"}</h3>
        <h3 className="cch-tab-title">{"Creators"}</h3>
      </div>
    </section>
  )
}
