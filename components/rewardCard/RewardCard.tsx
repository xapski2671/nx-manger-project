import { useEffect, useState } from "react"

export default function RewardCard() {

  const [rData, setRData] = useState("")

  async function fetchRData(){
    const res = await fetch("../../public/assets/reward-text.txt")
    const final = await res.text()
    setRData(final)
  }

  useEffect(()=>{
    fetchRData()
  },[])

  return (
    <div className="rc-container">
      <div className="rc-no-reward">{"Pledge 0.5 ETH"}</div>

      <div className="rc-description">
      </div>

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
