import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyles = createGlobalStyle`
${normalize()}
 
  body {
    font-family: ${props => props.theme.fontFamily};
  }

  a {
    color: ${props => props.theme.primary.fontColor};
    text-decoration:none;
    box-sizing:border-box;

    &:hover {
      color: ${props => props.theme.primary.purple};
      text-decoration: underline;
    }
  }
  .boton{
    color: #ffffff;
    text-decoration:none;
    font-size: 16px;
    background: #2196f3;
    padding-top: 11px;
    padding-bottom: 13px;
    padding-right: 22px;
    padding-left: 22px;
    border-radius: 5px;
    font-weight: 600;
    text-shadow: none;
    &:hover{
      background: #1c79c5;
      color: white;
      text-decoration:none;
    }
  }
`