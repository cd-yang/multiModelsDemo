// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Reducer, Effect } from 'umi';

export type StateType = {
  counter?: number;
  // status?: 'ok' | 'error';
  // type?: string;
  // currentAuthority?: 'user' | 'guest' | 'admin';
};

export type BasicDiagramModelType = {
  namespace: string;
  state: StateType;
  // effects: {
  //   increase: Effect;
  //   decrease: Effect;
  // };
  reducers: {
    changeCounter: Reducer<StateType>;
  };
};

const Model: BasicDiagramModelType = {
  namespace: 'basic-diagram',

  state: {
    counter: 0,
  },

  // effects: {
  //   increase() {
  //   },
  //   decrease() {
  //   },
  // },

  reducers: {
    changeCounter(state, { payload }) {
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};

export default Model;
