import React, { Component } from 'react';
import ShowHideTech from './ShowHideTech'
import FilterProjects from './FilterProjects'

class Projects extends Component {
  render() {
    return (
      <div>
      <ShowHideTech />
      <FilterProjects projectData={this.props.projectData} />
      </div>
    );
  }
}

export default Projects;
