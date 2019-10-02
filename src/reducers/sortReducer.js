import { FEATURED, SET_SORT_FILTER } from '../actions/types';

const sortReducer = (state = FEATURED, action) => {
  switch (action.type) {
    case SET_SORT_FILTER:
      return action.filter;

    default:
      return state;
  }
};

export default sortReducer;
