import { faEthereum } from "@fortawesome/free-brands-svg-icons"
import { faCubes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function FeaturedCampaign() {
  return (
    <div className="fc-container fl-tl">
      <div className="fc-img">
        <img src="/assets/manger-mockup-cmp.jpg" alt="mckp-img" />
      </div>

      <div className="fc-details fl-tl fl-c">
        <div className="fc-cta fl-tc fl-sb">
          <div className="fc-cat-name fl-cl">
            <FontAwesomeIcon icon={faCubes} className="fc-cat-icon"/>
            {"Metaverse"}
          </div>
          <button className="fl-fc">{"Learn more..."}</button>
        </div>

        <div className="fc-camp-title fl-tl fl-c">
          <h4>{"Dive Into The Metaverse"}</h4>
          <p>{"Take a surreal dive into the beautiful world of web3, and have fun."}</p>
        </div>

        <div className="fc-status-container fl-tl fl-c">
          <div className="fc-progress-bar"><div className="fc-progress-level"></div></div>

          <div className="fc-status fl-cl fl-sb">
            
            <div className="fc-amounts fl-tl fl-c">
              <div className="fc-amt-raised fl-cl">
                <FontAwesomeIcon icon={faEthereum} className="fc-curr-icon"/>
                <p className="fc-amt-figure">{"30.00"}</p>
                <p className="fc-amt-curr">{"ETH"}</p>
              </div>
              <div className="fc-goal">
                {"raised out of 10 ETH"}
              </div>
            </div>
          
            <div className="fc-percent fl-bl fl-c">
              <p>{"234"}</p>
              <p>{"backers"}</p>
            </div>

            <div className="fc-percent fl-bl fl-c">
              <p>{"13"}</p>
              <p>{"days to go"}</p>
            </div>
          </div>
        </div>

        <div className="fc-creator-eta fl-cl fl-sb">
          <div className="fc-creator fl-cl">
            <div className="fc-creator-jazzicon"></div>
            <p>{"bullishmei"}</p>
          </div>
          <button className="fc-fund-cta">{"Fund this project"}</button>
        </div>
      </div>
    </div>
  )
}
