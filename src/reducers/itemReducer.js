import { ADD_ITEM, REMOVE_ITEM } from '../action/actionTypes';

const initialState = [];

export const itemReducer = (state = initialState, action) => {
  console.log('itemReducer', state, action.type);
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: state.length,
          name: action.name
        }
      ];
    case REMOVE_ITEM:
      return state.filter((_, index) => index != action.index);
    case 'clear':
      return [];
    default:
      return state;
  }
};
