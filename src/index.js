import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './App';
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'
import Board from './components/Board'
import Lobby from './games/Lobby'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Lobby}/>
        <Route path="/games/:gameId" component={Board} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
