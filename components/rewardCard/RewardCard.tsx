export default function RewardCard() {
  return (
    <div className="rc-container">
      <div className="rc-no-reward">{"Pledge without a reward"}</div>
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
