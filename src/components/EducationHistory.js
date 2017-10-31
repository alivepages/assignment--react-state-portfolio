import React, { Component } from 'react';
import EduItem from './EduItem';

export default class EducationHistory extends Component {
  render() {
    var eduList = this.props.eduList.map(function(item) {
      return <EduItem institute={item.institute} fieldOfStudy={item.fieldOfStudy} dates={item.dates}/>
    });

    return (
      <section>
        <h4>Education</h4>
        <div class="degree-list">
          <div class="degree">
            {eduList}
          </div>
        </div>
      </section>
    );
  }
}
