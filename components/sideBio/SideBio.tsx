import { faEthereum, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGlobe, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SideBio() {
  return (
    <div className="sb-container fl-tl fl-c">
      <div className="sb-bio fl-tl fl-c">
        <h4>{"Creator"}</h4>

        <div>
          <div></div>
          <div>
            <div>
              <FontAwesomeIcon icon={faEthereum}/>
              <p>{"0x82b9...be0c"}</p>
            </div>
            <p>{"tubbycat18"}</p>
          </div>
        </div>

        <div>
          <FontAwesomeIcon icon={faTwitter} className="acp-social-icon"/>
          <FontAwesomeIcon icon={faGlobe} className="acp-social-icon"/>
          <FontAwesomeIcon icon={faShareNodes} className="acp-social-icon"/>
        </div>
        
        <p>{"A VR engineer and game developer based in San Antonio"}</p>
      </div>

      <div className="sb-support fl-tl fl-c">
        <h4>{"Support"}</h4>
        <div>
          <h4>{"Pledge without a reward"}</h4>

          <div>
            <p>{"ETH"}</p>
            <input type="number" />
          </div>

          <div>
            <h4>{"Back it because you believe in it."}</h4>
            <p>{"Support the project for no reward, just because it speaks to you."}</p>
          </div>
          
          <button className="acp-fund-cta">{"Fund this project"}</button>

        </div>
      </div>
    </div>
  )
}
