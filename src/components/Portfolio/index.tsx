import { useState } from "react"
import ReactCardCarousel from "react-card-carousel";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Loading } from "../Loading"
import Card from "../Card"

import iconReact from "../../assets/react-icon.svg"
import iconTypescript from "../../assets/typescript-icon.svg"
import iconSc from "../../assets/sc.png"
import iconRb from "../../assets/react-bootstrap.svg"
import iconFirebase from "../../assets/firebase.png"
import iconTailwind from '../../assets/tailwind.png'
import iconPhosphor from '../../assets/phosphor.png'
import iconVtex from '../../assets/vtex.png'
import iconAws from '../../assets/aws.png'

import imgWallet from '../../assets/wallet.png'
import imgHC from '../../assets/hiring-coders.png'
import gifHC from '../../assets/hiringCoders.gif'
import mp4HC from '../../assets/hiringCoders.mp4'
import imgDM from '../../assets/dtmoney.png'
import imgFeedback from '../../assets/feedback.png'
import gifFeedback from '../../assets/feedback-gif.gif'
import { StyledDiv } from "./styles";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1500)

  if(isLoading) return <Loading/>

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <StyledDiv>
      <div className="desktop">
        <ReactCardCarousel autoplay={true} autoplay_speed={100000}>
          <div>
            <Card 
              title="Wallet" 
              label="Sistema para Controle Financeira desenvolvido no Bootcamp Dev For Tech. Aplicação Web responsiva, desenvolvida em React e Typescript, com um dashboard onde é possível lançar despesas e receitas, visualizá-los através de gráficos, gerar relatórios detalhados e resumos em PDF."
              imgSrc={imgWallet}
              icons={[iconReact,iconTypescript, iconSc, iconRb, iconFirebase]}
              demoLink="https://myvallet.vercel.app"
              gitLink="https://github.com/BrunoSobralDEV/project-devfortech"
            />
          </div>
          <div>
            <Card 
              title="Vtex E-commerce" 
              label="E-commerce desenvolvido no HiringCoders da VTEX. Ficamos em 5º lugar dentre os 15 mil participantes. Diferencial: no carrinho de compras é oferecido uma outra peça, montando um combo, caso seja uma compra recorrente."
              videoSrc={mp4HC}
              icons={[iconReact,iconTypescript,iconAws,iconVtex]}
              gitLink="https://github.com/BrunoSobralDEV/final-challenge-hc"
            />  
          </div>
          <div>
            <Card 
              title="dtMoney" 
              label=""
              imgSrc={imgDM}
              icons={[iconReact,iconTypescript]}
              gitLink="https://github.com/BrunoSobralDEV/dtMoney"
            />
          </div>
          <div>
            <Card 
              title="Feedback Widget" 
              label=""
              imgSrc={imgFeedback}
              icons={[iconReact, iconTypescript,iconTailwind, iconPhosphor]}
              gitLink="https://github.com/BrunoSobralDEV/dtMoney"
            />
          </div>
        </ReactCardCarousel>
      </div>

      <div className='mobile'>
        <Carousel responsive={responsive} arrows={false} showDots={true}>
          <div style={{height: '60vh'}}>
            <Card 
              title="Wallet" 
              label="Sistema."
              imgSrc={imgWallet}
              icons={[iconReact,iconTypescript, iconSc, iconRb, iconFirebase]}
              demoLink="https://myvallet.vercel.app"
              gitLink="https://github.com/BrunoSobralDEV/project-devfortech"
            />
          </div>
          <div style={{height: '60vh'}}>
          <Card 
              title="Vtex E-commerce" 
              label="E-commerce desenvolvido no HiringCoders da VTEX. Ficamos em 5º lugar dentre os 15 mil participantes. Diferencial: no carrinho de compras é oferecido uma outra peça, montando um combo, caso seja uma compra recorrente."
              imgSrc={imgHC}
              icons={[iconReact,iconTypescript,iconAws,iconVtex]}
              gitLink="https://github.com/BrunoSobralDEV/final-challenge-hc"
            />  
          </div>
          <div style={{height: '60vh'}}>
            <Card 
                title="dtMoney" 
                label=""
                imgSrc={imgDM}
                icons={[iconReact,iconTypescript]}
                gitLink="https://github.com/BrunoSobralDEV/dtMoney"
              />
          </div>
          <div style={{height: '60vh'}}>
            <Card 
                title="Feedback Widget" 
                label=""
                imgSrc={imgFeedback}
                icons={[iconReact, iconTypescript,iconTailwind, iconPhosphor]}
                gitLink="https://github.com/BrunoSobralDEV/dtMoney"
              />
          </div>
        </Carousel>
      </div>
    </StyledDiv>
  )
}
