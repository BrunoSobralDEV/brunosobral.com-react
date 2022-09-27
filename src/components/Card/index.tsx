import { GithubLogo, Link } from 'phosphor-react'

import imgWallet from '../../assets/wallet.png'
import { StyledSection } from './styles'
import iconReact from "../../assets/react-icon.svg"
import iconTypescript from "../../assets/typescript-icon.svg"
import iconSc from "../../assets/sc.png"
import iconRb from "../../assets/react-bootstrap.svg"

interface ICard {
  title: string;
  imgSrc: string;
  label: string;
  demoLink: string;
  gitLink: string;
}

export default function Card({title, imgSrc, label, demoLink, gitLink}: ICard) {
  return (
    <StyledSection>
      <header><h1>{title}</h1></header>
      <main>
        <div>
          <img src={imgSrc} alt="" />
          <div>
            <label>{label}</label>
            {/* <label>Sistema de Gestão Financeira apresentado como Projeto Final para o Bootcamp Dev For Tech. Se trata de uma Aplicação Web Fullstack responsiva que organiza e facilita o controle das finanças pessoais através de um dashboard intuitivo, com gráficos e relatórios em PDF.</label> */}
          </div>
        </div>
      </main>
      <footer>
        <div>
          <img src={iconReact} alt="react-icon" style={{width: '35px'}} />
          <img src={iconTypescript} alt="typescript-icon" style={{width: '35px'}} />
          <img src={iconRb} alt="node-icon" style={{width: '35px'}} />
          <img src={iconSc} alt="node-icon" style={{width: '35px'}} />
        </div>
        <div>
          <a href={demoLink}><Link size={32} />Demo</a>
          <a href={gitLink}><GithubLogo size={32} /> Repositório</a>
        </div>
      </footer>
    </StyledSection>
  )
}
