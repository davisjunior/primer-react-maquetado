import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyles = createGlobalStyle`
${normalize()}
 
  body {
    font-family: ${props => props.theme.fontFamily};
  }

  a {
    color: ${props => props.theme.primary.fontColor};

    &: hover {
      color: ${props => props.theme.primary.purple};
      text-decoration: underline;
    }
  }
`