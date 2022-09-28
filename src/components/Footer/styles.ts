import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 800px) {
      padding: 20px 15px;
  }

  ul {
    position: relative;
    display: flex;
    align-items: center;

    li {
      list-style: none;
    
      a {
        position: relative;
        margin-right: 20px;
        display: inline-block;
        transform: scale(0.75);
        opacity: 0.8;
      }
    }
  }

  .copyrightText {
    font-weight: 500;
    color: #777;
    letter-spacing: 1px;
  }


`