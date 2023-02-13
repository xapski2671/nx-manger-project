import { faEthereum } from "@fortawesome/free-brands-svg-icons"
import { faCubes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ActiveCampaign() {
  return (
    <div className="ac-container fl-tl">
      <div className="ac-img">
        <img src="/assets/manger-mockup-cmp.jpg" alt="mckp-img" />
      </div>

      <div className="ac-details fl-tl fl-c">
        <div className="ac-cta fl-tc fl-sb">
          <div className="ac-cat-name fl-cl">
            <FontAwesomeIcon icon={faCubes} className="ac-cat-icon"/>
            {"Metaverse"}
          </div>
          <button className="fl-ac">{"Learn more..."}</button>
        </div>

        <div className="ac-camp-title fl-tl fl-c">
          <h4>{"Dive Into The Metaverse"}</h4>
          <p>{"Take a surreal dive into the beautiful world of web3, and have fun."}</p>
        </div>

        <div className="ac-status-container fl-tl fl-c">
          <div className="ac-progress-bar"><div className="ac-progress-level"></div></div>
          <div className="ac-status fl-cl fl-sb">
            <div className="ac-amounts fl-tl fl-c">
              <div className="ac-amt-raised fl-cl">
                <FontAwesomeIcon icon={faEthereum} className="ac-curr-icon"/>
                <p className="ac-amt-figure">{"30.00"}</p>
                <p className="ac-amt-curr">{"ETH"}</p>
              </div>
              <div className="ac-goal">
                {"raised out of 10 ETH"}
              </div>
            </div>
          
            <div className="ac-percent fl-bl fl-c">
              <p>{"234"}</p>
              <p>{"backers"}</p>
            </div>
            <div className="ac-percent fl-bl fl-c">
              <p>{"13"}</p>
              <p>{"days to go"}</p>
            </div>
          </div>
        </div>

        <div className="ac-creator-eta fl-cl fl-sb">
          <div className="ac-creator fl-cl">
            <div className="ac-creator-jazzicon"></div>
            <p>{"bullishmei"}</p>
          </div>
          <button className="ac-fund-cta">{"Fund this project"}</button>
        </div>
      </div>
    </div>
  )
}
