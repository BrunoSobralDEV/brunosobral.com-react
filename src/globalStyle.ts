import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-bg-color: lightblue;
    --color-primary: #03a9f4;
    --color-secondary: #003147;
    --color-3: #2a7da2;
    --color-4: #848c99;

    --background: #100F0F;
    --box-bg-color: #414141;
    --red: #FF3C26;
    --green: #69D959;
    --yellow: #F2CE00;
    --orange: #FF7C17;
    --blue: #0071B7;
    --aqua-blue: #05A782;
    --text: #F5F5F5;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: radial-gradient(#fff, #58aac9ab);
    /* background-image: radial-gradient(#242424 2px, #121212 2px); */
    color: var(--text);

    font-family: 'Poppins', sans-serif;
    font-weight: 400;

    user-select: none;
    cursor: default;
    
  }
`