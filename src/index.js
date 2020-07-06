import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Questions from './questionaire/Question';
import Share from './share/Share';
import Nav from './Nav';
import App from './App';




import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Nav />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/questions" component={Questions} />
      <Route path="/share" component={Share} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
