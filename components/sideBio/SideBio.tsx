import { faEthereum, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGlobe, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SideBio() {
  return (
    <div className="sb-container fl-tl fl-c">
      <div className="sb-bio fl-tl fl-c">
        <h4 className="sb-bio-heading">{"Creator"}</h4>

        <div className="sb-bio-details fl-tl">
          <div className="sb-creator-jazzicon"></div>
          <div className="sb-creator-details fl-tl fl-c">
            <div className="sb-creator-address fl-cl">
              <FontAwesomeIcon icon={faEthereum} className="sb-bio-curr-icon"/>
              <p>{"0x82b9...be0c"}</p>
            </div>
            <p className="sb-creator-name">{"tubbycat18"}</p>
          </div>
        </div>

        <div className="sb-creator-socials fl-cl">
          <FontAwesomeIcon icon={faTwitter} className="acp-social-icon"/>
          <FontAwesomeIcon icon={faGlobe} className="acp-social-icon"/>
          <FontAwesomeIcon icon={faShareNodes} className="acp-social-icon"/>
        </div>

        <p className="sb-creator-bio">{"A VR engineer and game developer based in San Antonio"}</p>
      </div>

      <div className="sb-support fl-tl fl-c">
        <h4 className="sb-support-heading">{"Support"}</h4>
        <div className="sb-support-box fl-tl fl-c">
          <h4 className="sb-support">{"Pledge without a reward"}</h4>

          <div className="sb-input fl-cl">
            <p>{"ETH"}</p>
            <input type="number" />
          </div>

          <div className="sb-support-info">
            <h4>{"Back it because you believe in it."}</h4>
            <p>{"Support the project for no reward, just because it speaks to you."}</p>
          </div>
          
          <button className="acp-fund-cta">{"Fund this project"}</button>
        </div>
      </div>
    </div>
  )
}
