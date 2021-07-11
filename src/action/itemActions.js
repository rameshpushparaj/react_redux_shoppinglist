import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';

export const addItem = itemname => {
  return {
    type: ADD_ITEM,
    name: itemname
  };
};

export const removeItem = index => {
  return {
    type: REMOVE_ITEM,
    index: index
  };
};
