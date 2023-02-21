import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function CreateCampaignPage() {
  return (
    <section className="crt-section sc-padding fl-cl fl-c">
      <div className="crt-nav fl-cc">
        <Link href="/">{"Profile"}</Link>
        <FontAwesomeIcon icon={faAngleRight}/>
        <Link href="/">{"Basics"}</Link>
        <FontAwesomeIcon icon={faAngleRight}/>
        <Link href="/">{"Story"}</Link>
        <FontAwesomeIcon icon={faAngleRight}/>
        <Link href="/">{"Rewards"}</Link>
        <FontAwesomeIcon icon={faAngleRight}/>
        <Link href="/">{"Creators"}</Link>
      </div>

      <div className="crt-form-card fl-tl fl-c">
        <h4>{"Campaign Title"}</h4>
        <div className="crt-form-card-sep"></div>
        <p>{"What is the title of your campaign?"}</p>
        <div className="crt-form-card-inp">
          <input type="text" />
        </div>
      </div>

      <div className="crt-form-card fl-tl fl-c">
        <h4>{"Campaign TagLine"}</h4>
        <div className="crt-form-card-sep"></div>
        <p>{"Provide a short description that describes your campaign to your audience."}</p>
        <div className="crt-form-card-inp">
          <input type="text" />
        </div>
      </div>

      <div className="crt-form-card fl-tl fl-c">
        <h4>{"Category"}</h4>
        <div className="crt-form-card-sep"></div>
        <p>{"To help backers find your campaign, select a category that best represents your project."}</p>
        <div className="crt-form-card-sel fl-cl">
          <p>{"Select your category"}</p>
        </div>
      </div>

      <div className="crt-form-card fl-tl fl-c">
        <h4>{"Tags"}</h4>
        <div className="crt-form-card-sep"></div>
        <p>{"Enter two keywords that best describe your campaign. These tags will help with organization and discoverability."}</p>
        <div className="crt-form-card-tag-sel fl-cl">
          <input type="text" />
        </div>
      </div>

      <div className="crt-form-card fl-tl fl-c">
        <h4>{"Campaign Duration"}</h4>
        <div className="crt-form-card-sep"></div>
        <p>{"How many days will you be running your campaign for? You can run a campaign for any number of days, with a 60 day duration maximum. Keep in mind that you will be able to extend as many times as you want up until the 60 day duration maximum!"}</p>
        <div className="crt-form-card-inp">
          <input type="number" />
        </div>
      </div>
    </section>  
  )
}
