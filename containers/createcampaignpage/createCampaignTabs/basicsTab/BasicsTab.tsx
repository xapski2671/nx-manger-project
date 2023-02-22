import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BasicsTab() {
  return (
    <div className="bt-tab fl-tl fl-c" id="basics-tab">
      <div className="bt-heading fl-tl fl-c">
        <h2 className="bt-title">{"Basics"}</h2>
        <p className="bt-subtitle">{"Make a good first impression: introduce your campaign objectives and entice people to learn more. This basic information will represent your campaign on your campaign page, on your campaign card, and in searches."}</p>
      </div>
      <div className="bt-form-container fl-cl fl-c">
        <div className="bt-card fl-tl fl-c ">
          <div className="bt-card-heading">
            <h2 className="bt-card-title">{"Campaign Title"}</h2>
            <div className="bt-card-sep"></div>
          </div>
          <p className="bt-card-subtitle">{"What is the title of your campaign?"}</p>
          <div className="bt-card-input fl-bl fl-c">
            <input type="text" className="bt-card-txt-input" maxLength={80}/>
            <p className="bt-card-char-count">{"80"}</p>
          </div>
        </div>

        <div className="bt-card fl-tl fl-c ">
          <div className="bt-card-heading">
            <h2 className="bt-card-title">{"Campaign Tagline"}</h2>
            <div className="bt-card-sep"></div>
          </div>
          <p className="bt-card-subtitle">{"Provide a short description that describes your campaign to your audience."}</p>
          <div className="bt-card-input fl-bl fl-c">
            <textarea name="bt-tagline" id="bt-tagline" cols={91} rows={2} className="bt-card-txt-ta" maxLength={100}></textarea>
            <p className="bt-card-char-count">{"100"}</p>
          </div>
        </div>

        <div className="bt-card fl-tl fl-c ">
          <div className="bt-card-heading">
            <h2 className="bt-card-title">{"Category"}</h2>
            <div className="bt-card-sep"></div>
          </div>
          <p className="bt-card-subtitle">{"To help backers find your campaign, select a category that best represents your project."}</p>
          <div className="bt-card-select fl-bl fl-c">
            <FontAwesomeIcon icon={faAngleDown} className="bt-card-select-icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}
