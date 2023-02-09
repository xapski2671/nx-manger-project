import { faChartLine, faGift, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function HowItWorks() {
  return (
    <section className="hi-section fl-cl fl-c sc-padding">
      <div className="hi-title fl-cl fl-c">
        <h3 className="hi-section-title">{"HOW IT WORKS"}</h3>
        <p className="hi-section-subtitle">{"Turn your ideas into reality"}</p>
      </div>

      <div className="hi-infobox-container fl-tc fl-sa">
        <div className="hi-infobox fl-cl fl-c">
          <FontAwesomeIcon icon={faChartLine} className="hi-infobox-icon"/>
          <div className="hi-infobox-details fl-cl fl-c">
            <h5 className="hi-info-title">{"Start your own campaign"}</h5>
            <p className="hi-info">{"Start your own crowdfunding campaign by describing your idea, setting a goal and duration, build a following by creating enticing rewards for different levels of donations and secure the funding you need to turn your idea into reality."}</p>
            <button className="hi-info-cta">{"Start your campaign"}</button>
          </div>
        </div>

        <div className="hi-infobox fl-cl fl-c">
          <FontAwesomeIcon icon={faHandHoldingDollar} className="hi-infobox-icon"/>
          <div className="hi-infobox-details fl-cl fl-c">
            <h5 className="hi-info-title">{"Fund a campaign"}</h5>
            <p className="hi-info">{"Have you found a project idea you care about?, simply click the “fund this project” button to contribute to its success and earn nice rewards in return."}</p>
            <button className="hi-info-cta">{"Fund a campaign"}</button>
          </div>
        </div>

        <div className="hi-infobox fl-cl fl-c">
          <FontAwesomeIcon icon={faGift} className="hi-infobox-icon"/>
          <div className="hi-infobox-details fl-cl fl-c">
            <h5 className="hi-info-title">{"Receive rewards"}</h5>
            <p className="hi-info">{"Earn various rewards for your funding efforts on successful campaigns. Rewards aren't promised but creators will reach out to backers frequently."}</p>
            <button className="hi-info-cta">{"Fund a campaign"}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
