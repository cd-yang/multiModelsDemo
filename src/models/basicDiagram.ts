// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Reducer, Effect } from 'umi';

export type StateType = {
  counter: number;
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
    increase: Reducer<StateType>;
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
    increase(state) {
      const currCounter = state?.counter ? state.counter : 0;
      return {
        ...state,
        counter: currCounter + 1
      }
    },
  },
};

export default Model;
