import styled from 'styled-components'

export const StyledSection = styled.section`
  color: black;
  border-radius: 20px;
  border: 1px solid #6197a33d;
  padding: 20px;
  /* background: #6197a33d; */
  background: #a4cbd8;
  main {
    display: flex;
    gap: 10px;

    div {
      position: relative;
      display: inline-block;

      img {
        border-radius: 10px;
      }

      div {
        color: black;
        background: #b4d4deb5;
        font-weight: 500;
        position: absolute;
        left: 0;
        width: 100%;
        height: auto;
        bottom: 6px;
        border-radius: 0 0 10px 10px;
        padding: 10px;

        label {
        }
      }
    }
  }

  footer {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;

    div {
      display: flex;
      gap: 20px;
    }

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      
      /* color: #7c8181; */
      color: #fff;
      font-weight: 500;
      border-radius: 4px;
      letter-spacing: 1px;
      background: #58aac9;;
      padding: 5px;
      transition: all 0.5s;

      &:hover {
        background: #2196f3;
      }
    }
  }
`