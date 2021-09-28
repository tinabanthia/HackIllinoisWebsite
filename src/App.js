import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Mentors from './components/pages/Mentors'
import Schedule from './components/pages/Schedule'
import SignUp from './components/pages/SignUp'
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path= '/' exact component={Home}/>
        <Route path= '/mentors' exact component={Mentors}/>
        <Route path= '/schedule' exact component={Schedule}/>
        <Route path= '/sign-up' exact component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
