/*
 *
 * MarketListContainer actions
 *
 */

import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  ADD_CART_ITEM,
  TOGGLE_CART_MODAL,
  CLEAR_DATA,
} from './constants';

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}
export function fetchDataSuccess(payload) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload,
  };
}
export function addCardItem(payload) {
  return {
    type: ADD_CART_ITEM,
    payload,
  };
}
export function toggleCartModal() {
  return {
    type: TOGGLE_CART_MODAL,
  };
}
export function clearData() {
  return {
    type: CLEAR_DATA,
  };
}
