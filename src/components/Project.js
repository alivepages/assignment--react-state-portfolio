import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    let className = 'project project--' + this.props.type;
    return (
    <div className={className}>
      <span className="project__title">{this.props.name}</span>
    </div>
    );
  }
}
