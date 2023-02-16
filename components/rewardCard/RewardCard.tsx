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
    <div className="rc-container">
      <div className="rc-no-reward">{"Pledge 0.5 ETH"}</div>

      <article className="rc-description" dangerouslySetInnerHTML={rData}/>

      <div className="rc-input-container">
        <div>
          <p>{"Pledge amount"}</p>
          <input type="number" />
        </div>
        <button className="rc-cta">{"Continue"}</button>
      </div>
    </div>
  )
}
