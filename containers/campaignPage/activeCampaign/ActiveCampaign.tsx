import { faEthereum, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faCubes, faGlobe, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ethers } from "ethers"
import { useContext, useEffect, useState } from "react"
import campaignABI from "@/constants/Campaign.json"
import { conn } from "@/types"
import { ConnectionContext } from "@/contexts/connection"


interface props{
  address: string
}

export default function ActiveCampaign({ address }: props) {
  const { isConnected, signer }:conn = useContext(ConnectionContext)!
  const [cdata, setCdata] = useState<any>()
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    let isIn = true

    async function start(){
      const cmpCntrt = new ethers.Contract(address, campaignABI.abi, signer)
      let cmpd
      try{
        const uri = await cmpCntrt.s_campaignURI()
        const httpUri = uri.replace("ipfs://", "https://ipfs.io/ipfs/")
        cmpd = await fetch(httpUri).then(res => res.json()).then(data => data).catch(e=>console.log(e))
        isIn && setCdata(cmpd)
        isIn && setLoading(false)
      }catch(e){console.log(e)}
    }

    isConnected && start().catch(e=>console.log(e))
    return () => {isIn = false}
  },[isConnected])
  
  return (
    <section className="acp-section sc-padding fl-tl">
      <div className="acp-img">
        <img src="/assets/manger-mockup-cmp.jpg" alt="mckp-img" />
      </div>

      <div className="acp-details fl-tl fl-c">

        <div className="acp-camp-title fl-tl fl-c">
          <h4>{loading ? "" : cdata.title}</h4>
          <p>{"Take a surreal dive into the beautiful world of web3, and have fun."}</p>
        </div>

        <div className="acp-status-container fl-tl fl-c">
          <div className="acp-progress-bar"><div className="acp-progress-level"></div></div>

          <div className="acp-status fl-cl fl-sb">

            <div className="acp-amounts fl-tl fl-c">
              <div className="acp-amt-raised fl-cl">
                <FontAwesomeIcon icon={faEthereum} className="acp-curr-icon"/>
                <p className="acp-amt-figure">{"30.00"}</p>
                <p className="acp-amt-curr">{"ETH"}</p>
              </div>
              <div className="acp-goal">
                {"raised out of 10 ETH"}
              </div>
            </div>
          
            <div className="acp-percent fl-bl fl-c">
              <p>{"234"}</p>
              <p>{"backers"}</p>
            </div>

            <div className="acp-percent fl-bl fl-c">
              <p>{"13"}</p>
              <p>{"days to go"}</p>
            </div>
          </div>
        </div>

        <button className="acp-fund-cta">{"Fund this project"}</button>

        <div className="acp-bio fl-cl fl-sb">
          <div className="acp-bio-native fl-cl">
            <div className="acp-cat-name fl-cl">
              <FontAwesomeIcon icon={faCubes} className="acp-cat-icon"/>
              {"Metaverse"}
            </div>
            <div className="acp-creator fl-cl">
              <img src="/assets/manger_bio_logo.svg" alt="bio-logo" />
              <p>{"bullishmei"}</p>
            </div>
          </div>

          <div className="acp-bio-socials fl-cr">
            <FontAwesomeIcon icon={faTwitter} className="acp-social-icon"/>
            <FontAwesomeIcon icon={faGlobe} className="acp-social-icon"/>
            <FontAwesomeIcon icon={faShareNodes} className="acp-social-icon"/>
          </div>
        </div>

        <div className="acp-info">
          <p>{"All or nothing. This project will only be funded if it reaches its goal by Fri, February 17 2023 5:20 PM CET."}</p>
        </div>
      </div>
    </section>
  )
}
