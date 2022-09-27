import { useState } from "react"


import { Loading } from "../Loading"
import Card from "../Card"
import imgWallet from '../../assets/wallet.png'

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1000)
  
  if(isLoading) return <Loading/>
  return (
    <Card 
      title="Wallet" 
      label="Sistema para Controle Financeira desenvolvido no Bootcamp Dev For Tech. Aplicação Web responsiva, desenvolvida em React e Typescript, com um dashboard onde é possível lançar despesas e receitas, visualizá-los através de gráficos, gerar relatórios detalhados e resumos em PDF."
      imgSrc={imgWallet}
      demoLink="https://myvallet.vercel.app"
      gitLink="https://github.com/BrunoSobralDEV/project-devfortech"
    />
  )
}
