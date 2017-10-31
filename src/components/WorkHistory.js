import React, { Component } from 'react';
import WorkItem from './WorkItem';

export default class WorkHistory extends Component {
  render() {

    var jobsList = this.props.jobsList.map(function(item) {
      return <WorkItem job={item}/>
    });

    return (
      <section>
        <h4>Work Experience</h4>
        <div class="job-timeline">
          {jobsList}
        </div>
      </section>
    );
  }
}
