import React, { Component } from 'react';
import HomeView from './components/HomeView'
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Projects from './components/Projects'
import Cv from './components/Cv'

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/cv" component={Cv} />
          <Route path="/projects" component={Projects}/>
        </Switch>
      </div>
    );
  }
}

export default App;
