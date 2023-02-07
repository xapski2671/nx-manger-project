import { faWallet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
  const [close, setClose] = useState(false)


  return (
    <div className={`si-sidebar-reactive ${close && "si-inVis"}`} onClick={()=>{setClose(true)}}>
      <div className="si-sidebar">
        <div className="si-sidebar-menu">
          <Link href="./">{"Campaigns"}</Link>
          <Link href="/">{"How it works"}</Link>
          <Link href="/">{"About us"}</Link>
          <Link href="/">{"Blog"}</Link>
        </div>
        <div className="si-connect-wrapper">
          <button className="si-connect">
            <FontAwesomeIcon icon={faWallet}/>
            {"Connect your wallet"}
          </button>
        </div>
      </div>
    </div>
  )
}
