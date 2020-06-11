interface StateCenter {}

interface ActionCenter {
  type: typeof import('../../plugin/context/reducer/center/actionTypes').SAVE_BLOCK;
  data: {};
}
