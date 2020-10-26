import React, { Component } from 'react';
import './App.css';
import Players from './Component/Players/Players';
import Teams from './Component/Teams/Teams';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={Teams} />
            <Route path='/players' component={Players} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
