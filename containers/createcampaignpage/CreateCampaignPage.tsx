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
        
      </div>

    </section>  
  )
}
