import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;

  .toggle {
    cursor: pointer;
  }
  a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    background: #F75421;
    box-shadow: 7px 9px 9px rgb(0 0 0 / 30%);
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    letter-spacing: 1px;
    transition: all 0.5s;
    
    &:hover {
      opacity: 0.8;
    }
  }
`
interface StyledProps {
  isOpenMenu: boolean;
}

export const StyledContainer =  styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpenMenu }: StyledProps) => (isOpenMenu ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  display: flex;
  background: #333;
  justify-content: center;
  align-items: center;
  transition: 1s;
  z-index: 3;
  
  .toggleClose {
    position: absolute;
    top: 40px;
    right: 40px;
    cursor: pointer;
    z-index: 2;
  }

  .banner {
    position: relative;
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navLink {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    ul {
      position: relative;
      width: 100%;

      li {
        position: relative;
        list-style: none;
        
        a {
          position: relative;
          color: #fff;
          font-size: 2em;
          font-weight: 500;
          text-decoration: none;
          margin: 5px 0;
          margin-left: 100px;
          display: inline-block;
          letter-spacing: 1px;
          text-transform: uppercase;

          &:hover {
            color: #2196f3;
          }
        }
      }
    }
      
  
    
  
    
  }

`