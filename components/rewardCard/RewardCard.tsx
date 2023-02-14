import { useEffect, useState } from "react"

export default function RewardCard() {

  const [rData, setRData] = useState("")

  async function fetchRData(){
    const res = await fetch("/reward-text.txt")
    const final = await res.text()
    // const reader = new FileReader()
    // reader.readAsText(final)
    setRData(final)
  }

  useEffect(()=>{
    fetchRData()
  },[])

  return (
    <div className="rc-container">
      <div className="rc-no-reward">{"Pledge 0.5 ETH"}</div>

      <div className="rc-description">
        {rData}
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
