import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM } from '../actions/types';
import uuid from 'uuid/v4';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const cartItem = {
        ...action.payload,
        cartId: uuid(),
        inCart: true
      };
      // console.log('ADD_ITEM STATE', state);
      return [...state, cartItem];

    case UPDATE_ITEM:
      // console.log('payload', action.payload);

      return [
        ...state.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      ];

    case REMOVE_ITEM:
      //first need to check id, so filter with id, then map through the
      // item to remove and change the inCart to false after removing
      const itemToRemove = state.filter(item => {
        // const updatedItem = (item.inCart = false);
        return { ...item, inCart: false };
      });

      console.log(state);

      return [...state.filter(item => item.id !== action.payload)];

    default:
      return state;
  }
};

export default cartReducer;
