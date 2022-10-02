import styled from "styled-components";

export const StyledDiv = styled.div`
  .desktop {
    display: none;
  }
  .mobile {
    max-width: 600px;
    color: black;

    ul {
      max-width: 90vw;
    }
  }
  @media( max-width: 800px) {
    .desktop {
      display: none;
    }
  }
`