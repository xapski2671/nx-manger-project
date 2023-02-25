import { faAngleDown, faImages, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BasicsTab() {
  return (
    <div className="bt-tab fl-tl fl-c" id="basics-tab">
      <div className="bt-heading fl-tl fl-c">
        <h2 className="bt-title">{"Basics"}</h2>
        <p className="bt-subtitle">{"Make a good first impression: introduce your campaign objectives and entice people to learn more. This basic information will represent your campaign on your campaign page, on your campaign card, and in searches."}</p>
      </div>

      <form className="bt-form-container fl-cl fl-c">
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
            <h2 className="bt-card-title">{"Campaign Card Image"}</h2>
            <div className="bt-card-sep"></div>
          </div>
          <p className="bt-card-subtitle">{"Upload a square image that represents your campaign. 640 x 640px is the recommended and minimun resolution."}</p>
          <div className="bt-card-img-input fl-cl fl-c">
            <input type="file" id="bt-card-img" hidden/>
            <label htmlFor="bt-card-img" className="bt-img-label">
              <div className="bt-img-container fl-cc">
                <FontAwesomeIcon icon={faImages} className="bt-card-img-icon"/>
              </div>
            </label>
          </div>
        </div>

        <div className="bt-card fl-tl fl-c">
          <div className="bt-card-heading">
            <h2 className="bt-card-title">{"Category"}</h2>
            <div className="bt-card-sep"></div>
          </div>
          <p className="bt-card-subtitle">{"To help backers find your campaign, select a category that best represents your project."}</p>
          <div className="bt-card-select fl-cl fl-sb">
            <div className="bt-card-categories fl-cl">
              <span className="bt-card-category fl-cc">
                <p>{"Arts"}</p>
              </span>
            </div>
            <FontAwesomeIcon icon={faAngleDown} className="bt-card-select-icon"/>
          </div>
        </div>

        <div className="bt-card fl-tl fl-c ">
          <div className="bt-card-heading">
            <h2 className="bt-card-title">{"Tags"}</h2>
            <div className="bt-card-sep"></div>
          </div>
          <p className="bt-card-subtitle">{"Enter up to five keywords that best describe your campaign. These tags will help with organization and discoverability."}</p>
          <div className="bt-card-select fl-cl fl-sb">
            <div className="bt-card-tags fl-cl">
              <span className="bt-card-tag fl-cc">
                <p>{"photography"}</p>
                <FontAwesomeIcon icon={faXmark} className="bt-xmark-icon"/>
              </span>
              <span className="bt-card-tag fl-cc">
                <p>{"photography"}</p>
                <FontAwesomeIcon icon={faXmark} className="bt-xmark-icon"/>
              </span>
              <span className="bt-card-tag fl-cc">
                <p>{"photography"}</p>
                <FontAwesomeIcon icon={faXmark} className="bt-xmark-icon"/>
              </span>
              <span className="bt-card-tag fl-cc">
                <p>{"photography"}</p>
                <FontAwesomeIcon icon={faXmark} className="bt-xmark-icon"/>
              </span>
            </div>
            <input type="text" className="bt-tag-input" maxLength={20} placeholder="Enter a few tags for your campaign"/>
          </div>
        </div>

        <div className="bt-card fl-tl fl-c ">
          <div className="bt-card-heading">
            <h2 className="bt-card-title">{"Campaign Duration"}</h2>
            <div className="bt-card-sep"></div>
          </div>
          <p className="bt-card-subtitle">{"How many days will you be running your campaign for? You can run a campaign for any number of days, with a 60 day duration maximum. Keep in mind that you will be able to extend as many times as you want up until the 60 day duration maximum!"}</p>
          <div className="bt-card-input fl-tl fl-c">
            <input type="number" className="bt-card-num-input"/>
          </div>
        </div>

        <div className="bt-submit fl-cr">
          <button type="submit" className="bt-submit-btn">{"Continue"}</button>
        </div>
      </form>
    </div>
  )
}
