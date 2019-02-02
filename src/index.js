import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleLeft,
  faAngleRight,
  faCalendar,
  faCalendarPlus,
} from '@fortawesome/free-solid-svg-icons';
import reducer from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './assets/sass/index.sass';

library.add(faAngleLeft, faAngleRight, faCalendar, faCalendarPlus);

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
