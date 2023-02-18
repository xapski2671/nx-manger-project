import { faEthereum, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGlobe, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CreatorHeader() {
  return (
    <section className="crh-section sc-padding fl-cl fl-c">
      <div className="crh-bio fl-tl">
        <div className="crh-jazzicon"></div>
        <div className="crh-details fl-tl fl-c">
          <div className="crh-address fl-tl">
            <FontAwesomeIcon icon={faEthereum} className="crh-curr-icon"/>
            <p>{"0x82b9...be0c"}</p>
          </div>
          <p className="crh-username">{"tubbycat18"}</p>
          <p className="crh-name">{"Otis Abott"}</p>
          <p className="crh-contribution">{"Backed 12 projects • Created 3 campaigns"}</p>
        </div>
      </div>

      <div className="crh-menu fl-tc">
        <div className="crh-tab-menu fl-cl">
          <h3 className="crh-tab-title">{"ABOUT"}</h3>
          <h3 className="crh-tab-title crh-active-tab">{"BACKED"}</h3>
          <h3 className="crh-tab-title">{"CREATED"}</h3>
        </div>

        <div className="crh-socials fl-cr">
          <FontAwesomeIcon icon={faGlobe} className="crh-social-icon"/>
          <FontAwesomeIcon icon={faTwitter} className="crh-social-icon"/>
          <FontAwesomeIcon icon={faShareNodes} className="crh-social-icon"/>
        </div>
      </div>
    </section>
  )
}
