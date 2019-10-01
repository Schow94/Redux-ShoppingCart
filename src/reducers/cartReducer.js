import { ADD_ITEM } from '../actions/types';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log('ADDING', action.payload);
      console.log('cart state', state);
      return [...state, action.payload];

    default:
      return state;
  }
};

export default cartReducer;
