import { FilePdf, ArrowRight  } from 'phosphor-react'

import iconHtml from "../../assets/html-icon.svg"
import iconCss from "../../assets/css-icon.svg"
import iconJs from "../../assets/js-icon.svg"
import iconReact from "../../assets/react-icon.svg"
import iconTypescript from "../../assets/typescript-icon.svg"
import iconNode from "../../assets/node-icon.svg"
import iconSc from "../../assets/sc.png"
import iconMui from "../../assets/mui.png"
import iconRb from "../../assets/react-bootstrap.svg"
import { StyledMain } from "./styles"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { StyledApp } from "../../styles"
import { useState } from "react"
import Portfolio from "../Portfolio"

export default function Main() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenMain, setIsOpenMain] = useState(true)
  const [isOpenPortfolio, setIsOpenPortfolio] = useState(false)

  const handleToggleMenu = () => {setIsOpenMenu(!isOpenMenu)}
  const handleOpenMain = () => {setIsOpenMain(true)}
  const handleOpenPortfolio = () => {setIsOpenMain(false)}

  return (
    <StyledApp>
      <Header isOpenMenu={isOpenMenu} toggleMenu={handleToggleMenu} openMain={handleOpenMain} openPortfolio={handleOpenPortfolio}/>
      {isOpenMain ? <StyledMain>
        <div className="imgBx">
          <img src="https://avatars.githubusercontent.com/u/89643847?v=4" className="cover" alt="" />
        </div>

        <div className="content">
          <h2>Hi, I am<br/><span>Bruno Sobral</span></h2>
          <p>Front-end developer, I create web applications with ReactJS+TypeScript. Graduating in Systems Analysis and Development and graduated in Accounting Sciences.</p>
          
          <div className="techIcons">
            <img src={iconHtml} alt="html5-icon" style={{width: '35px'}} />
            <img src={iconCss} alt="css3-icon" style={{width: '35px'}} />
            <img src={iconJs} alt="javascript-icon" style={{width: '35px'}} />
            <img src={iconReact} alt="react-icon" style={{width: '35px'}} />
            <img src={iconTypescript} alt="typescript-icon" style={{width: '35px'}} />
            <img src={iconNode} alt="node-icon" style={{width: '35px'}} />
            <img src={iconMui} alt="node-icon" style={{width: '35px'}} />
            <img src={iconRb} alt="node-icon" style={{width: '35px'}} />
            <img src={iconSc} alt="node-icon" style={{width: '35px'}} />
          </div>

          <div className="btn-group">
            <a href="../../assets/Bruno_Santos_curriculo.pdf" className="btn"><FilePdf size={24} />Download CV</a>
            <a href="#" className="btn" onClick={handleOpenPortfolio}>Portfolio <ArrowRight size={24} /></a>
          </div>
          
        </div>
      </StyledMain> : <Portfolio/>}
      <Footer />
    </StyledApp>
  )
}
