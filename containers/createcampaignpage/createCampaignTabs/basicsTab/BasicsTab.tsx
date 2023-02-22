export default function BasicsTab() {
  return (
    <div className="bt-tab fl-tl fl-c" id="basics-tab">
      <div className="bt-heading fl-tl fl-c">
        <h2 className="bt-title">{"Basics"}</h2>
        <p className="bt-subtitle">{"Make a good first impression: introduce your campaign objectives and entice people to learn more. This basic information will represent your campaign on your campaign page, on your campaign card, and in searches."}</p>
      </div>
      <div className="bt-form-container fl-cl fl-c">
        <div className="bt-card fl-tl fl-c ">
          <h2 className="bt-card-title">{"Campaign Title"}</h2>
          <div className="bt-card-sep"></div>
          <p className="bt-card-subtitle">{"What is the title of your campaign?"}</p>
          <input type="text" className="bt-card-txt-input"/>
        </div>
      </div>
    </div>
  )
}
