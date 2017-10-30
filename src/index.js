import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './css/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class AppRouter extends React.Component {
  render () {
    return (
      <HashRouter>
        <App/>
      </HashRouter>
    );
  }
}

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
registerServiceWorker();
