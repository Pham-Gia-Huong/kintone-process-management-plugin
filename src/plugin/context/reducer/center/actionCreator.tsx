import {SAVE_BLOCK, EDIT_BLOCK} from './actionTypes';
export const saveBlock = (block)=>({
  type: SAVE_BLOCK,
  data: {
    block
  }
});
export const editBlock = (block)=>({
  type: EDIT_BLOCK,
  data: {
    block
  }
});