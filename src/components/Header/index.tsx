import { List, X } from 'phosphor-react'
import { StyledHeader, StyledContainer } from "./styles"

interface HeaderProps {
  isOpenMenu: boolean;
  toggleMenu: () => void;
  openMain: () => void;
  openPortfolio: () => void;
}

export function Header({isOpenMenu, toggleMenu, openMain, openPortfolio}: HeaderProps) {
  
  return (
    <>
      <StyledHeader>
        <div className="toggle" onClick={toggleMenu}><List size={32} /></div>
        <a href="mailto:brunosobralss@hotmail.com" className="btn">Hire Me</a>
      </StyledHeader>
      <StyledContainer isOpenMenu={isOpenMenu} className="navigation">
        <div className="toggleClose" onClick={toggleMenu}><X size={32} /></div>
        <div className="banner"></div>
        <div className="navLink">
          <ul>
            <li><a href="#" className="btnMenu" onClick={() => {toggleMenu(); openMain();}}>Home</a></li>
            <li><a href="./resume-cv.html">About</a></li>
            <li><a href="#" onClick={toggleMenu}>Services</a></li>
            <li><a href='#' onClick={() => {toggleMenu(); openPortfolio();}}>Portfolio</a></li>
            <li><a href="mailto:brunosobralss@hotmail.com">Contact</a></li>
          </ul>
        </div>
      </StyledContainer>
    </>
  )
}
