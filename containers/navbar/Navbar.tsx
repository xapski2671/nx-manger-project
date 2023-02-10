import { Sidebar } from "@/components/exportComps"
import { useScroll } from "@/hooks/useScroll"
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
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
  const [SiInvis, setSiInvis] = useState(true)
  const { scrollY, scrollX, scrollDirection } = useScroll()
  const router = useRouter()

  function siVisible(bool: boolean){
    setSiInvis(bool)
  }

  return (
    <nav className={`nv-navbar sc-padding ${scrollDirection == "down" ? scrollY >= 8 ? "nv-active" : "" : ""}  ${router.pathname !== "/" && "page-fill"}`} onScroll={()=>{console.log(scrollY)}}>
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
        </div>
      </div>
    </nav>
  )
}
