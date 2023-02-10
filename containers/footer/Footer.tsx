import { faFacebookF, faGithub, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="ft-section sc-padding">
      <div className="ft-container fl-cl fl-c">
        <div className="ft-menu fl-cc fl-sb">
          <div className="ft-logo fl-cl">
            <img src="/assets/manger_logo.svg" alt="logo" />
            <p>{"MANGER"}</p>
          </div>

          <div className="ft-menu-links fl-tc">
            <Link href="./" className="ft-menu-link">{"Campaigns"}</Link>
            <Link href="./" className="ft-menu-link">{"About us"}</Link>
            <Link href="./" className="ft-menu-link">{"Blog"}</Link>
            <Link href="./" className="ft-menu-link">{"Help"}</Link>
          </div>

          <div className="ft-social-links fl-cr">
            <div className="ft-social-link">
              <FontAwesomeIcon icon={faFacebookF} className="ft-social-icon"/>
            </div>
            <div className="ft-social-link">
              <FontAwesomeIcon icon={faTwitter} className="ft-social-icon"/>
            </div>
            <div className="ft-social-link">
              <FontAwesomeIcon icon={faTelegram} className="ft-social-icon"/>
            </div>
            <div className="ft-social-link">
              <FontAwesomeIcon icon={faGithub} className="ft-social-icon"/>
            </div>
          </div>
        </div>

        <div className="ft-divider"></div>

        <div className="ft-copyright fl-cl">
          <p>{"© 2023 Manger.All Rights Reserved."}</p>
        </div>
      </div>
    </footer>
  )
}
