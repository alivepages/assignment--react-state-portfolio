import React, { Component } from 'react';
//import { projectData } from '../data/datasource'
import Project from './Project'
/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */

export default class FilterProjects extends Component {
  constructor(){
    super()
    this.state = {
      projectType: 'all'
    }
  }

  _filterType = type => {
    this.setState({
      projectType: type
    })
  }

  render() {
    let projets = this.props.data.filter((obj) => {
      obj.type = 'team';
      if (obj.solo) {
        obj.type = 'solo'
      }
      if (obj.type === this.state.projectType
        || this.state.projectType === 'all'
      ) {
        return true
      }
      return false
    })

    .map((obj, index) => {
      return <Project name = {obj.projectName} type = {obj.type} key={index}/>
    })

    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" onClick={()=>{this._filterType('all')}} className="project-type project-type--all project-type--selected">
              All
            </span>

            <span data-ptype="solo" onClick={()=>{this._filterType('solo')}} className="project-type project-type--solo ">
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" onClick={()=>{this._filterType('team')}} className="project-type project-type--team">
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>

            {projets}

          </div>
        </section>

    );
  }
}
