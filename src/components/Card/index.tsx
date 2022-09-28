import { GithubLogo, Link } from 'phosphor-react'

import { StyledSection } from './styles'


interface ICard {
  title: string;
  imgSrc: string;
  label: string;
  demoLink: string;
  gitLink: string;
  icons?: string[];
}

export default function Card(props: ICard) {
  return (
    <StyledSection>
      <header><h1>{props.title}</h1></header>
      <main>
        <div>
          <img src={props.imgSrc} alt="" />
          <div>
            <label>{props.label}</label>
          </div>
        </div>
      </main>
      <footer>
        <div>
          {!props.icons ? null : 
            props.icons.map((icon) => 
              (<img src={icon} alt="tech-icon" style={{width: '35px'}} />)
            )}
        </div>
        <div>
          <a href={props.demoLink} target="_blank"><Link size={32} />Demo</a>
          <a href={props.gitLink} target="_blank"><GithubLogo size={32} /> Repositório</a>
        </div>
      </footer>
    </StyledSection>
  )
}
