import * as actionTypes from './actionTypes';
export default (centerArea: StateCenter, action: ActionCenter) => {
  switch (action.type) {
    case actionTypes.SAVE_BLOCK: {
      let newFlowchart;
      return newFlowchart;
    }
    default:
      return centerArea;
  }
};
