import { ADD_ITEM, UPDATE_ITEM } from './types';

export const addToCart = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const updateCart = item => {
  return {
    type: UPDATE_ITEM,
    payload: item
  };
};
