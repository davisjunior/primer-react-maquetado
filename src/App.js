import logo from './logo.svg';
import './App.css';
import {Home} from './scenes/Home'
import { ThemeProvider } from 'styled-components';
import {theme} from './resources/theme'
import { GlobalStyles} from './components/GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Home/>
    </ThemeProvider>
    
  );
}

export default App;
