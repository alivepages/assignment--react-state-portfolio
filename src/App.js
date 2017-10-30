import React, { Component } from 'react';
import ShowHideTech from './components/ShowHideTech'
import FilterProjects from './components/FilterProjects'
import HomeView from './components/HomeView'
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'


class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/cv" component={ShowHideTech} />
          <Route path="/projects" component={FilterProjects}/>
        </Switch>
      </div>
    );
  }
}

export default App;
