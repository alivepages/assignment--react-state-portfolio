import React, { Component } from 'react';


/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear

*/

export default class ShowHideTech extends Component {
  constructor() {
    super();

    this.state = {
      extended: false
    }
  }

  _toggleIcons = () => {
    this.setState({
      extended: !this.state.extended
    })
  }
  render() {

    let techlistStatus = `techlist--hidden`
    if (this.state.extended) {
      techlistStatus = '';
    }
    return (
      <section>
        <h4>Technologies</h4>
        <button className="toggle-techlist" onClick={this._toggleIcons}>+ Show Tech</button>

        <div className={`techlist ${techlistStatus}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}
