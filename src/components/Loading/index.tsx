import { CircleNotch,SpinnerGap  } from 'phosphor-react'
import { StyledLoading } from './styles'

export function Loading() {
  return (
    <StyledLoading>
      <CircleNotch  weight="bold" className="animate" height={32} width={32}/>
    </StyledLoading>
  )
}
