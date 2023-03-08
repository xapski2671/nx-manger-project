import { Logo, Sidebar } from "@/components/exportComps"
import { ConnectionContext } from "@/contexts/connection"
import { useScroll } from "@/hooks/useScroll"
import { conn } from "@/types"
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useState } from "react"


function Menu(){
  return (
    <>
      <Link href="/campaigns">{"Campaigns"}</Link>
      <Link href="/#how-it-works">{"How it works"}</Link>
      <Link href="/">{"About us"}</Link>
      <Link href="/#blog">{"Blog"}</Link>
    </>
  )
}

export default function Navbar() {
  const payload:conn = useContext(ConnectionContext)!

  const [SiInvis, setSiInvis] = useState(true)
  const { scrollY, scrollX, scrollDirection } = useScroll()
  const router = useRouter()

  function siVisible(bool: boolean){
    setSiInvis(bool)
  }

  return (
    <nav 
      className={
        `nv-navbar sc-padding ${scrollDirection == "down" ? scrollY >= 8 ? "nv-active" : "" : ""}  
        ${(router.pathname == "/" || router.pathname == "/creator" || router.pathname == "/create-campaign" ) && "page-unfill"}`
      } 
      onScroll={()=>{console.log(scrollY)}}
    >
      <div className="fl-cc fl-sb nv-menu-wrapper">
        <Logo className="nv-logo fl-cl"/>
        <div className="nv-menu fl-cr">
          <div className="nv-menu-links fl-cr">
            <Menu/>
          </div>
          <button className="nv-connect" onClick={()=>{payload.connect()}}>{payload.isConnected ? "Connected" : "Connect"}</button>
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
