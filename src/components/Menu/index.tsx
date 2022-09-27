import { StyledContainer } from './styles'

export function Menu() {
  return (
    <StyledContainer className="navigation">
      <div className="banner"></div>
      <div className="navLink">
        <ul>
          <li><a href="#" className="btnMenu">Home</a></li>
          <li><a href="./resume-cv.html">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="mailto:brunosobralss@hotmail.com">Contact</a></li>
        </ul>
      </div>
    </StyledContainer>
  )
}