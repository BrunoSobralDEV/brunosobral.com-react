import styled from 'styled-components'

export const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .imgBx {
    position: relative;
    min-width: 500px;
    height: 500px;
    overflow: hidden;
    
    .cover {
      border-radius: 50%;
      box-shadow: 7px 9px 9px rgba(0,0,0,.3);
    }
  }

  .content {
    max-width: 700px;
    margin-left: 40px;
    
    h2 {
      font-weight: 500;
      letter-spacing: 1px;
      color: #777;
      line-height: 2.5em;
    }

    h2 span {
      font-weight: 700;
      color: #2196f3;
      font-size: 3em;
    }

    p {
      color: #777;
      font-size: 1.2em;
      margin-bottom: 20px;
    }

    .btn-group {
      display: flex;
      gap: 15px;
    }
    .btn {
      position: relative;
      padding: 10px 20px;
      text-decoration: none;
      color: #fff;
      font-weight: 500;
      border-radius: 4px;
      letter-spacing: 1px;
      background: #2196f3;
      box-shadow: 7px 9px 9px rgba(0,0,0,.3);

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      width: 235px;
      transition: all 1s;
      &:hover {
        filter: brightness(0.7);
      }
    }
  }

  .techIcons {
    display: flex;
    gap: 0.625em;
    margin-bottom: 2em;
  }

  
`