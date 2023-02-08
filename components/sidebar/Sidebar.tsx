import { faBarsStaggered, faWallet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { AnimationEvent, useState } from "react"

interface Props {
  myVis: Function
}

export default function Sidebar({ myVis }: Props) {
  const [showMe, setShowMe] = useState(true)

  function handleClick(){
    setShowMe(false)
  }

  function handleAnimationFinished(e:AnimationEvent){
    if(e.animationName.includes("slideout")){
      myVis(true)
    }
  }

  return (
    <div className={`si-sidebar-reactive ${showMe ? "si-slide-in" : "si-slide-out"}`} 
      onClick={()=>{handleClick()}} 
      onAnimationEnd={(e)=>{handleAnimationFinished(e)}}
    >
      <div className="si-sidebar fl-tl">
        <div className="si-nav fl-cc fl-sb">
          <div className="si-logo fl-cl">
            <p>{"MANGER"}</p>
          </div>

          <FontAwesomeIcon icon={faBarsStaggered} className="nv-hamburger" onClick={()=>{handleClick()}}/>
        </div>

        <div className="si-sidebar-menu fl-tl">
          <div className="si-sidebar-menu-link">
            <Link href="./">{"Campaigns"}</Link>
          </div>
          <div className="si-sidebar-menu-link">
            <Link href="./">{"How it works"}</Link>
          </div>
          <div className="si-sidebar-menu-link">
            <Link href="./">{"About us"}</Link>
          </div>
          <div className="si-sidebar-menu-link">
            <Link href="./">{"Blog"}</Link>
          </div>
        </div>


        <div className="si-connect-wrapper">
          <button className="si-connect fl-cc si-con-big">
            <FontAwesomeIcon icon={faWallet} className="si-wallet-icon"/>
            {"Connect your wallet"}
          </button>
          <button className="si-connect fl-cc si-con-small">
            <FontAwesomeIcon icon={faWallet} className="si-wallet-icon"/>
            {"Connect"}
          </button>
        </div>
      </div>
    </div>
  )
}
