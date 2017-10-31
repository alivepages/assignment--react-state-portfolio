import React, { Component } from 'react';

export default class WorkItem extends Component {
  render() {

    return (
      <div class="job">
        <div class="job__years">
          <h6 class="job__end">{this.props.job.years.start}</h6>
          <h6 class="job__start">{this.props.job.years.end}</h6>
        </div>
        <h5 class="job__title">{this.props.job.title}</h5>
        <h5 class="job__company">{this.props.job.company}</h5>
        <p class="job__description">{this.props.job.description}</p>
      </div>
    );
  }
}
