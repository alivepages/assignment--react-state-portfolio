import React, { Component } from 'react';

export default class EduItem extends Component {
  render() {
    return (
      <div>
      <h5 class="degree__institute">{this.props.institute}</h5>
      <p class="degree__field">{this.props.fieldOfStudy}</p>
      <p class="degree__dates">{this.props.dates}</p>
      </div>
    );
  }
}
