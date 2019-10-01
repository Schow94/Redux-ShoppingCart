import { ADD_ITEM } from './types';

export const addToCart = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
