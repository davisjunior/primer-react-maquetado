import { Route, Switch } from "react-router"
import logo from './logo.svg';
import './App.css';
import {Hometwo} from './scenes/Hometwo'
import { Dashboard } from './scenes/Dashboard'

import {Login } from '../src/scenes/Login'
import {Signup } from '../src/scenes/Signup'

import { ThemeProvider } from 'styled-components';
import {theme} from './resources/theme'
import { GlobalStyles} from './components/GlobalStyles'
import { CvSimple } from './components/Curriculums/CvSimple'
import { CvBasic } from './components/Curriculums/CvBasic'
import { CvModernOne } from './components/Curriculums/CvModernOne'
import { CvModern } from './components/Curriculums/CvModern'
import { CvMinimalist } from './components/Curriculums/CvMinimalist'
import { CvNews } from './components/Curriculums/CvNews'
import { Blog } from './scenes/Blog'

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

        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Signup">
          <Signup />
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

        <Route path="/maker-cv-five">
          <CvMinimalist/>
        </Route>

        <Route path="/maker-cv-six">
          <CvNews/>
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
