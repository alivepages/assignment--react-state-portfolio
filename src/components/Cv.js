import React, { Component } from 'react';
import SkillsList from './SkillsList'
import EducationHistory from './EducationHistory'
import WorkHistory from './WorkHistory'


class Cv extends Component {
  render() {
    return (
      <div>
      <SkillsList skills={this.props.skills} />
      <EducationHistory eduList={this.props.eduList} />
      <WorkHistory jobsList={this.props.jobsList} />
      </div>
    );
  }
}

export default Cv;
