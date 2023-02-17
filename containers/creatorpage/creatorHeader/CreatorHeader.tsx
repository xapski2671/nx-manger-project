import { faEthereum } from "@fortawesome/free-brands-svg-icons"
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
    </section>
  )
}
