import { Route, Switch } from "react-router"
import logo from './logo.svg';
import './App.css';
import {Hometwo} from './scenes/Hometwo'
import { Dashboard } from './scenes/Dashboard'
import { ThemeProvider } from 'styled-components';
import {theme} from './resources/theme'
import { GlobalStyles} from './components/GlobalStyles'
import { CvSimple } from './components/Curriculums/CvSimple'
import { CvBasic } from './components/Curriculums/CvBasic'
import { CvModernOne } from './components/Curriculums/CvModernOne'
import { CvModern } from './components/Curriculums/CvModern'

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
        <Route path="/maker-cv">
          <CvSimple />
        </Route>
        <Route path="/maker-cv-two">
          <CvBasic />
        </Route>
        <Route path="/maker-cv-three">
          <CvModern/>
        </Route>

        <Route path="/maker-cv-four">
          <CvModernOne/>
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
