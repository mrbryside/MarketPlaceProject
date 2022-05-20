import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the marketListContainer state domain
 */

const selectMarketListContainerDomain = state =>
  state.marketListContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MarketListContainer
 */

const makeSelectMarketListContainer = () =>
  createSelector(
    selectMarketListContainerDomain,
    substate => substate,
  );

export default makeSelectMarketListContainer;
export { selectMarketListContainerDomain };
