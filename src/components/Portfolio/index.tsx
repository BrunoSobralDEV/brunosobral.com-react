import { useState } from "react"
import ReactCardCarousel from "react-card-carousel";


import { Loading } from "../Loading"
import Card from "../Card"

import iconReact from "../../assets/react-icon.svg"
import iconTypescript from "../../assets/typescript-icon.svg"
import iconSc from "../../assets/sc.png"
import iconRb from "../../assets/react-bootstrap.svg"
import iconFirebase from "../../assets/firebase.png"

import imgWallet from '../../assets/wallet.png'
import imgHC from '../../assets/hiring-coders.png'
import imgDM from '../../assets/dtmoney.png'
import imgFeedback from '../../assets/feedback.png'
import gifFeedback from '../../assets/feedback-gif.gif'

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1500)

  if(isLoading) return <Loading/>
  
  return (
    <div>
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
            imgSrc={imgHC}
            icons={[iconReact,iconTypescript]}
            demoLink="https://www.youtube.com/watch?v=uOHKTYh0xI4&ab_channel=AffonsoK"
            gitLink="https://github.com/BrunoSobralDEV/final-challenge-hc"
          />
        </div>
        <div>
          <Card 
            title="dtMoney" 
            label=""
            imgSrc={imgDM}
            icons={[iconReact,iconTypescript]}
            demoLink="https://github.com/BrunoSobralDEV/dtMoney"
            gitLink="https://github.com/BrunoSobralDEV/dtMoney"
          />
        </div>
        <div>
          <Card 
            title="Feedback Widget" 
            label=""
            imgSrc={imgFeedback}
            icons={[iconReact,iconTypescript]}
            demoLink="https://github.com/BrunoSobralDEV/dtMoney"
            gitLink="https://github.com/BrunoSobralDEV/dtMoney"
          />
        </div>
      </ReactCardCarousel>
    </div>
  )
}
