import { Route, Switch } from "react-router"
import logo from './logo.svg';
import './App.css';
import {Hometwo} from './scenes/Hometwo'
import { Dashboard } from './scenes/Dashboard'
import { ThemeProvider } from 'styled-components';
import {theme} from './resources/theme'
import { GlobalStyles} from './components/GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Switch>
        <Route exact path="/">
          <Hometwo />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        {/* HACER 404
        <Route>
          <NoMatch />
        </Route> */} 
      </Switch>
    </ThemeProvider>
    
  );
}

export default App;
