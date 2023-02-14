import { faEthereum } from "@fortawesome/free-brands-svg-icons"
import { faCubes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ActiveCampaign() {
  return (
    <section className="acp-section fl-tl">
      <div className="acp-img">
        <img src="/assets/manger-mockup-cmp.jpg" alt="mckp-img" />
      </div>

      <div className="acp-details fl-tl fl-c">

        <div className="acp-camp-title fl-tl fl-c">
          <h4>{"Dive Into The Metaverse"}</h4>
          <p>{"Take a surreal dive into the beautiful world of web3, and have fun."}</p>
        </div>

        <div className="acp-status-container fl-tl fl-c">
          <div className="acp-progress-bar"><div className="acp-progress-level"></div></div>

          <div className="acp-status fl-cl fl-sb">

            <div className="acp-amounts fl-tl fl-c">
              <div className="acp-amt-raised fl-cl">
                <FontAwesomeIcon icon={faEthereum} className="acp-curr-icon"/>
                <p className="acp-amt-figure">{"30.00"}</p>
                <p className="acp-amt-curr">{"ETH"}</p>
              </div>
              <div className="acp-goal">
                {"raised out of 10 ETH"}
              </div>
            </div>
          
            <div className="acp-percent fl-bl fl-c">
              <p>{"234"}</p>
              <p>{"backers"}</p>
            </div>

            <div className="acp-percent fl-bl fl-c">
              <p>{"13"}</p>
              <p>{"days to go"}</p>
            </div>
          </div>
        </div>

        <button className="acp-fund-cta">{"Fund this project"}</button>

        <div className="acp-bio fl-cl fl-sb">
          <div className="acp-bio-native fl-cl">
            <div className="acp-cat-name fl-cl">
              <FontAwesomeIcon icon={faCubes} className="acp-cat-icon"/>
              {"Metaverse"}
            </div>
            <div className="acp-creator fl-cl">
              <div className="acp-creator-jazzicon"></div>
              <p>{"bullishmei"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
