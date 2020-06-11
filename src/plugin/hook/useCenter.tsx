import {useContext} from 'react';
import {context} from '../context';
import {actionCenter} from '../context/reducer/index';
export const useCenterHook = () => {
  const {
    center: {dispatch: dispatchCenter},
  } = useContext(context);
  return {
    onSaveChartBlock: (block) => dispatchCenter(actionCenter.saveBlock(block)),
  };
};
