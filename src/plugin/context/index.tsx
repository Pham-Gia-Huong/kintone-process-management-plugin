import React, {useReducer} from 'react';
import centerReducer from './reducer/center';
import defaultValueCenter from './reducer/center/defaultState';
const context = React.createContext<Partial<ContextProps>>({});

const Provider = (props: JSX.ElementChildrenAttribute) => {
  const [centerState, centerDispatch] = useReducer(centerReducer, defaultValueCenter);
  const combine = {
    center: {
      state: centerState,
      dispatch: centerDispatch,
    },
  };
  return <context.Provider value={combine}>{props.children}</context.Provider>;
};

export {context};
export default Provider;
