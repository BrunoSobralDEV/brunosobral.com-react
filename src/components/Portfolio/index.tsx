import { useState } from "react"
import { Loading } from "../Loading"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1000)
  
  if(isLoading) return <Loading/>
  return (
    <div>
      Portfolio
    </div>
  )
}
