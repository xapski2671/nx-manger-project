import { Sidebar } from "@/components/exportComps"
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"


function Menu(){
  return (
    <>
      <Link href="/">{"Campaigns"}</Link>
      <Link href="/">{"How it works"}</Link>
      <Link href="/">{"About us"}</Link>
      <Link href="/">{"Blog"}</Link>
    </>
  )
}

export default function Navbar() {
  const [hamMenu, setHamMenu] = useState(false)
  const [SiInvis, setSiInvis] = useState(true)

  function siVisible(bool: boolean){
    setSiInvis(bool)
  }

  return (
    <nav className="nv-navbar">
      <div className="fl-cc fl-sb nv-menu-wrapper">
        <div className="nv-logo fl-cl">
          <img src="/assets/manger_logo.svg" alt="logo" />
          <p>{"MANGER"}</p>
        </div>
        <div className="nv-menu fl-cr">
          <div className="nv-menu-links fl-cr">
            <Menu/>
          </div>
          <button className="nv-connect">{"Connect"}</button>
          <FontAwesomeIcon icon={faBarsStaggered} className="nv-hamburger" onClick={()=>{setSiInvis(prev=>!prev)}}/>
          {
            !SiInvis && (
              <Sidebar myVis={siVisible}/>
            )
          }
          {/* <div className={hamMenu ? "nv-ham-menu-container" : "nv-inVis"}>
            <div className="nv-menu-links fl-tl">
              <Menu/>
              <button className="nv-connect nv-ham-connect">{"Connect"}</button>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  )
}
