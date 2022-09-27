import { useState } from "react"
import ReactCardCarousel from "react-card-carousel";


import { Loading } from "../Loading"
import Card from "../Card"
import imgWallet from '../../assets/wallet.png'
import imgHC from '../../assets/hiring-coders.png'

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1500)

  const CONTAINER_STYLE = {
    position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle"
  }

  const CARD_STYLE = {
    height: "200px",
    width: "200px",
    paddingTop: "80px",
    textAlign: "center",
    background: "#52C0F5",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box"
  };

  if(isLoading) return <Loading/>
  return (
    <div>
      <ReactCardCarousel autoplay={true} autoplay_speed={10000}>
        <div>
          <Card 
            title="Wallet" 
            label="Sistema para Controle Financeira desenvolvido no Bootcamp Dev For Tech. Aplicação Web responsiva, desenvolvida em React e Typescript, com um dashboard onde é possível lançar despesas e receitas, visualizá-los através de gráficos, gerar relatórios detalhados e resumos em PDF."
            imgSrc={imgWallet}
            demoLink="https://myvallet.vercel.app"
            gitLink="https://github.com/BrunoSobralDEV/project-devfortech"
          />
        </div>
        <div>
          <Card 
            title="Vtex E-commerce" 
            label="E-commerce desenvolvido no HiringCoders da VTEX. Ficamos em 5º lugar dentre os 15 mil participantes. Diferencial: no carrinho de compras é oferecido uma outra peça, montando um combo, caso seja uma compra recorrente."
            imgSrc={imgHC}
            demoLink="https://www.youtube.com/watch?v=uOHKTYh0xI4&ab_channel=AffonsoK"
            gitLink="https://github.com/BrunoSobralDEV/final-challenge-hc"
          />
        </div>
        <div>
          <Card 
            title="Wallet" 
            label="Sistema para Controle Financeira desenvolvido no Bootcamp Dev For Tech. Aplicação Web responsiva, desenvolvida em React e Typescript, com um dashboard onde é possível lançar despesas e receitas, visualizá-los através de gráficos, gerar relatórios detalhados e resumos em PDF."
            imgSrc={imgWallet}
            demoLink="https://myvallet.vercel.app"
            gitLink="https://github.com/BrunoSobralDEV/project-devfortech"
          />
        </div>
      </ReactCardCarousel>
    </div>
  )
}
