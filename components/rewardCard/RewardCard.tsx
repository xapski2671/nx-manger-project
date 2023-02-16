import { useEffect, useState } from "react"
import DOMPurify from "dompurify"

export default function RewardCard() {

  const [rData, setRData] = useState({ __html: "" })

  async function fetchRData(){
    const res = await fetch("/reward-text.txt")
    const final = await res.text()
    const html = { __html: DOMPurify.sanitize(final) }
    setRData(html)
  }

  useEffect(()=>{
    fetchRData()
  },[])

  return (
    <div className="rc-container fl-tl fl-c">
      <div className="rc-reward-id fl-cc">{"Pledge 0.5 ETH"}</div>

      <article className="rc-description" dangerouslySetInnerHTML={rData}/>

      <div className="rc-input-container fl-bl fl-sb">
        <div className="rc-input">
          <p>{"Bonus support (optional)"}</p>
          <div className="rc-fund-container fl-cl">
            <div className="rc-inp fl-cl fl-sb">
              <p>{"ETH"}</p>
              <input type="number" />
            </div>
          </div>
        </div>
        <button className="rc-cta">{"Pledge 0.5 ETH"}</button>
      </div>
    </div>
  )
}
