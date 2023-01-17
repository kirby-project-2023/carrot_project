import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* =================================
  //* reset
  ================================= */
  * {margin: 0;padding: 0;border: none;background: none;font-size: 100%;font: inherit;box-sizing: border-box;-webkit-tap-highlight-color: transparent;}
  ol,ul {list-style: none;} em {font-size: normal;} img {vertical-align: top;outline: none;}
  input,select,textarea,button {appearance: none;-webkit-appearance: none;outline: none;background: none;border: none;border-radius: 0;margin: 0;padding: 0;}
  input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {background: transparent;background-clip: text;-webkit-background-clip: text; -webkit-text-fill-color: white;}
  textarea {resize: none;} ::placeholder {font: inherit;}
  a {text-decoration: none;color: inherit;}a:visited {background: none;}a:active {background: none;}
  /* =================================
  //* custom global
  ================================= */
  body {
    font-family: var(--font-gangwon), 
    -apple-system, 
    BlinkMacSystemFont, 
    system-ui, 
    Roboto, 
    'Helvetica Neue', 
    'Segoe UI', 
    'Apple SD Gothic Neo', 
    'Noto Sans KR', 
    'Malgun Gothic', sans-serif;
  }
  .app-wrap {
    position: relative;
    max-width: 768px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 0 var(--gap-md);
    background: var(--night);
    background: linear-gradient(335deg, rgba(56,59,98,1) 0%, rgba(56,59,98,1) 70%, rgba(77,77,77,1) 100%);
    @media (max-width: 768px){
      max-width: 100%;
      overflow-x: hidden;
    }
  }
  .wrap {
    width: 100%;
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fz-base {
    font-family: var(--font-gangwon);
  }
  .ft-point {
    font-family: var(--font-peace);
  }
  .silver {background: var(--silver);}
  .gray {background: var(--gray);}
  .black {background: var(--black);}
  .yellow {background: var(--yellow);}
  .night {background: var(--night);}
  .carrot {background: var(--carrot);}
  .green {background: var(--green);}
  .pink {background: var(--pink);}
  .pale {background: var(--pale);}

  .mt-large {margin-top: var(--gap-large)}
  .mt-big {margin-top: var(--gap-big)}
  .mt-md {margin-top: var(--gap-md)}
  .mt-sm {margin-top: var(--gap-sm)}

  .mr-large {margin-right: var(--gap-large)}
  .mr-big {margin-right: var(--gap-big)}
  .mr-md {margin-right: var(--gap-md)}
  .mr-sm {margin-right: var(--gap-sm)}

  .mb-large {margin-bottom: var(--gap-large)}
  .mb-big {margin-bottom: var(--gap-big)}
  .mb-md {margin-bottom: var(--gap-md)}
  .mb-sm {margin-bottom: var(--gap-sm)}

  .ml-large {margin-left: var(--gap-large)}
  .ml-big {margin-left: var(--gap-big)}
  .ml-md {margin-left: var(--gap-md)}
  .ml-sm {margin-left: var(--gap-sm)}

  /* animation */
  .eff-fill,
  .eff-raise {
    transition: var(--trans);
  }
  .eff-fill:hover{
    box-shadow: inset 0 0 0 10em var(--hoverColor);
    transition: var(--trans);
  }
  .eff-raise:hover{
    box-shadow: 0 0.5em 0.5em -0.4em var(--hoverColor);
    transform: translateY(-0.25em);
    transition: var(--trans);
  }
`;

export default GlobalStyle;
