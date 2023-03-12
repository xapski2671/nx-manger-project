import { useState } from "react"

export default function NullRewardCard() {
  const [inp, setInp] = useState("")

  return (
    <div className="rc-container fl-tl fl-c">
      <div className="rc-id-del fl-tc fl-sb">
        <div className="rc-reward-id fl-cc">{"Pledge without a reward"}</div>
      </div>

      <div className="rc-input-container fl-bl fl-sb">
        <div className="rc-input">
          <p>{"Pledge amount"}</p>
          <div className="rc-fund-container fl-cl">
            <div className="rc-inp fl-cl fl-sb">
              <p className="rc-inp-curr">{"ETH"}</p>
              <input type="number" onChange={(e)=>{setInp(e.target.value)}} value={inp}/>
            </div>
          </div>
        </div>
        {!inp ? <p>{""}</p> : <button className="rc-cta">{`Pledge ${inp} ETH`}</button>}
      </div>
    </div>
  )
}
