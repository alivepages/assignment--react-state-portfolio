import React, { Component } from 'react';

export default class SkillsList extends Component {
  render() {
    var skillsList = this.props.skills.map(function(item) {
      return <span class="skills-list__single">{item}</span>
    });

    return (
      <section>
        <h4>Skills</h4>
        <div class="skills-list">
        {skillsList}
        </div>
      </section>
    );
  }
}
