import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Body from './components/Body'
import Appointment from './components/appointment/Appointment'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Body}/>
          <Route exact path="/appointment/" component={Appointment}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
