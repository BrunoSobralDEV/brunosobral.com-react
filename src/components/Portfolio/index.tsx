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
      label="Sistema de Gestão Financeira apresentado como Projeto Final para o Bootcamp Dev For Tech. Se trata de uma Aplicação Web Fullstack responsiva que organiza e facilita o controle das finanças pessoais através de um dashboard intuitivo, com gráficos e relatórios em PDF."
      imgSrc={imgWallet}
      demoLink="https://myvallet.vercel.app"
      gitLink="https://github.com/BrunoSobralDEV/project-devfortech"
    />
  )
}
