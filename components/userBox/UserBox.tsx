import { faArrowLeft, faArrowsLeftRightToLine, faRightLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimationEvent, useState } from "react"

interface props{
  iVisible: boolean
  offMe: Function
}

export default function UserBox({ iVisible, offMe }:props) {
  // const [showMe, setShowMe] = useState(true)
  function handleAnimationFinished(e:AnimationEvent){
    if(e.animationName.includes("slideout")){
      offMe()
    }
  }

  return (
    <div className={`ub-container fl-cl fl-c ${!iVisible ? "ub-slide-in" : "ub-slide-out"}`} onAnimationEnd={(e)=>{handleAnimationFinished(e)}}> 
      <div className="ub-acc-grp fl-tl">
        <div className="ub-jazzicon"></div>
        <div className="ub-addr-grp fl-tl fl-c">
          <p>{"WALLET"}</p>
          <p>{"0x45ba-bb0e3"}</p>
        </div>
      </div>

      <div className="ub-details-cont">
        <div className="ub-attribute-grp">
          <p>{"USERNAME"}</p>
          <p>{"do_cryola"}</p>
        </div>
        <div className="ub-attribute-grp">
          <p>{"EMAIL"}</p>
          <p>{"cryolagameng@gmail.com"}</p>
        </div>
        <div className="ub-attribute-grp">
          <p>{"LOCATION"}</p>
          <p>{"Singapore"}</p>
        </div>
        <div className="ub-attribute-grp">
          <p>{"TWITTER"}</p>
          <p>{"do_cryola"}</p>
        </div>
      </div>

      <button className="ub-cta">{"Start a campaign"}</button>

      <div className="ub-wallet-options fl-cl">
        <div className="ub-wallet-option fl-cl">
          <FontAwesomeIcon icon={faArrowsLeftRightToLine} className="ub-w-option-icon"/>
          <p>{"Disconnect"}</p>
        </div>
        <div className="ub-wallet-option fl-cl">
          <FontAwesomeIcon icon={faRightLeft} className="ub-w-option-icon"/>
          <p>{"Switch wallet"}</p>
        </div>
      </div>
    </div>
  )
}
