
export default function RewardCard() {
  return (
    <div className="rc-container">
      <div className="rc-no-reward">{"Pledge 0.5 ETH"}</div>

      <div className="rc-description">
        <p>{`${fetch("../../public/assets/reward-text.txt").then(r=>r.text()).then(text=>console.log(text))}`}</p>
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
