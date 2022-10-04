import styled from "styled-components";

export const StyledDiv = styled.main`
  .desktop {
    display: none;
  }
  .mobile {
    width: 90vw;
    color: black;
  }

  @media( max-width: 800px) {
    display: flex;
    align-items: center;
    height: 90vh;
    
    .desktop {
      display: none;
    }
  }
  
`