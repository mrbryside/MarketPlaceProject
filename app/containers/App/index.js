/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MarketListContainer from 'containers/MarketListContainer/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginContainer from 'containers/LoginContainer/Loadable';

import GlobalStyle from '../../global-styles';
import { PATH_MARKET_LIST } from './constants';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path={PATH_MARKET_LIST} component={MarketListContainer} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
