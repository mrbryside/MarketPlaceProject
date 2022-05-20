/*
 *
 * MarketListContainer reducer
 *
 */
import produce from 'immer';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  ADD_CART_ITEM,
  TOGGLE_CART_MODAL,
  CLEAR_DATA,
} from './constants';

export const initialState = {
  productData: false,
  fetching: false,
  carts: {},
  totalAmount: 0,
  totalBaht: 0,
  toggleModal: false,
};

/* eslint-disable default-case, no-param-reassign */
const marketListContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_DATA:
        draft.fetching = true;
        break;
      case FETCH_DATA_SUCCESS:
        draft.productData = action.payload;
        draft.fetching = false;
        break;
      case TOGGLE_CART_MODAL:
        draft.toggleModal = !draft.toggleModal;
        break;
      case ADD_CART_ITEM:
        draft.carts = {
          ...draft.carts,
          [action.payload.title]: {
            ...action.payload,
            amount:
              draft.carts[action.payload.title] &&
              draft.carts[action.payload.title].amount
                ? draft.carts[action.payload.title].amount + 1
                : 1,
          },
        };
        draft.totalAmount += 1;
        draft.totalBaht += action.payload.price;
        break;
      case CLEAR_DATA:
        draft.productData = false;
        draft.fetching = false;
        draft.carts = {};
        draft.totalAmount = 0;
        draft.totalBaht = 0;
        draft.toggleModal = false;
        break;
    }
  });

export default marketListContainerReducer;
