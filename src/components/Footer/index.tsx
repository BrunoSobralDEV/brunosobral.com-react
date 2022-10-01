import { StyledFooter } from "./styles";
import imgFacebook from "../../assets/facebook.png"
import imgTwitter from "../../assets/twitter.png"
import imgGithub from "../../assets/github.png"
import imgLinkedin from "../../assets/linkedin.png"


export function Footer() {
  return (
    <StyledFooter>
      <ul className="sci">
        <li><a href="#"><img src={imgFacebook} alt="facebook-logo" /></a></li>
        <li><a href="#"><img src={imgTwitter} alt="twitter-logo" /></a></li>
        <li><a href="https://www.linkedin.com/in/brunosobraldev/" target="_blank"><img src={imgLinkedin} alt="linkedin-logo" /></a></li>
        <li><a href="https://github.com/BrunoSobralDEV" target="_blank"><img src={imgGithub} alt="instagram-logo" /></a></li>
      </ul>
      
      <p className="copyrightText">&lt;<span className="desktop">Code with <span>🤍</span> by </span>Bruno Sobral /&gt;</p>
    </StyledFooter>
  )
}
