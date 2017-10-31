import React, { Component } from 'react';
import SkillsList from './SkillsList'
import EducationHistory from './EducationHistory'
import WorkHistory from './WorkHistory'
import {skills, eduList, jobsList} from '../data/datasource'

class Cv extends Component {
  render() {
    return (
      <div>
      <SkillsList skills={skills} />
      <EducationHistory eduList={eduList} />
      <WorkHistory jobsList={jobsList} />
      </div>
    );
  }
}

export default Cv;
