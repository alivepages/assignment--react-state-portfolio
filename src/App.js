import React, { Component } from 'react';
import HomeView from './components/HomeView'
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Projects from './components/Projects'
import Cv from './components/Cv'
import {skills, eduList, jobsList, projectData} from './data/datasource'

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/cv" render = {(props) => (
              <Cv {... props} skills={skills} eduList={eduList} jobsList={jobsList} />
          )} />
          <Route path="/projects" render = {(props) => (
              <Projects {... props} projectData={projectData} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
