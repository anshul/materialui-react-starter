import React, { PureComponent } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import routes from './routes';
import * as reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

class App extends PureComponent {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
          <Router history={history} routes={routes} />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
