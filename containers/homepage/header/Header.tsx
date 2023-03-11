import { ConnectionContext } from "@/contexts/connection"
import { conn } from "@/types"
import { truncateStr } from "@/utils/truncateStr"
import { faWallet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"

export default function Header() {
  const { isConnected, account }:conn = useContext(ConnectionContext)!

  return (
    <header className="hd-header sc-padding fl-bc">
      <div className="hd-hero fl-cc fl-sb">
        <div className="hd-hero-title fl-tr fl-c">
          <h1>{"Fundraising on the blockchain."}</h1>
          <p>{"Manger is a reward-based crypto crowdfunding platform connecting interested backers with remarkable creators in web3 space."}</p>
          <button className="hd-connect fl-cc">
            <FontAwesomeIcon icon={faWallet} className="hd-wallet-icon"/>
            {isConnected ? truncateStr(account, 10) : "Connect your wallet"}
          </button>
        </div>

        <img src="/assets/manger_header_img.png" alt="hd-img" />
      </div>
    </header>
  )
}
