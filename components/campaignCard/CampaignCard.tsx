import { faEthereum } from "@fortawesome/free-brands-svg-icons"
import { faCubes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CampaignCard() {
  return (
    <div className="cc-container fl-cl fl-c">
      <div className="cc-img">
        <img src="/assets/manger-mockup-cmp.jpg" alt="cc-mckp" />
      </div>

      <div className="cc-details fl-cl fl-c">
        <div className="cc-cta fl-tc fl-sb">
          <div className="cc-cat-name fl-cl">
            <FontAwesomeIcon icon={faCubes} className="cc-cat-icon"/>
            {"Metaverse"}
          </div>
          <button className="fl-tl">{"Read more..."}</button>
        </div>

        <div className="cc-camp-title fl-tl fl-c">
          <h4>{"Dive Into The Metaverse"}</h4>
          <p>{"Take a surreal dive into the beautiful world of web3, and have fun."}</p>
        </div>

        <div className="cc-status fl-cl fl-sb">
          <div className="cc-amounts fl-tl fl-c">
            <div className="cc-amt-raised fl-cl">
              <FontAwesomeIcon icon={faEthereum} className="cc-curr-icon"/>
              <p className="cc-amt-figure">{"3.00"}</p>
              <p className="cc-amt-curr">{"ETH"}</p>
            </div>
            <div className="cc-goal">
              {"raised out of 10 ETH"}
            </div>
          </div>

          <div className="cc-progress-bar"><div className="cc-progress-level"></div></div>
        
          <div className="cc-percent fl-bl fl-c">
            <p>{"30%"}</p>
            <p>{"funded"}</p>
          </div>
        </div>

        <div className="cc-creator-eta">
          <div className="cc-creator"></div>
          <div className="cc-eta">
            <p>{"13"}</p>
            <p>{"days to go"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
