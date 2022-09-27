import styled from 'styled-components'

export const StyledContainer =  styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  display: flex;
  background: #333;
  justify-content: center;
  align-items: center;
  transition: 1s;
  
  .active {
    left: 0;
  }
`