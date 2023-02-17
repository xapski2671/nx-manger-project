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

      {/* <article className="rc-description" dangerouslySetInnerHTML={rData}/> */}
      <article className="rc-details fl-tl fl-c">
        <h3 className="rc-title">{"Digital Edition"}</h3>
        <p className="rc-description">{"The Complete DIGITAL Spider-Squirrel Volume One Ultimate Edition!"}</p>
        <div className="rc-perks-container">
          <h5>{"INCLUDES"}</h5>
          <ul className="rc-perks fl-tl fl-c">
            <li>{"Digital Spider-Squirrel Vol.1 Ultimate Edition"}</li>
            <li>{"Digital Stretch Goals (As Unlocked)"}</li>
          </ul>
        </div>
      </article>

      <div className="rc-input-container fl-bl fl-sb">
        <div className="rc-input">
          <p>{"Bonus support (optional)"}</p>
          <div className="rc-fund-container fl-cl">
            <div className="rc-inp fl-cl fl-sb">
              <p className="rc-inp-curr">{"ETH"}</p>
              <input type="number" />
            </div>
          </div>
        </div>
        <button className="rc-cta">{"Pledge 0.5 ETH"}</button>
      </div>
    </div>
  )
}
