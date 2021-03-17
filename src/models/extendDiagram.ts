import type { Reducer } from 'umi';
import Model from '@/models/basicDiagram';
import type { BasicDiagramState } from '@/models/basicDiagram';
import modelExtend from 'dva-model-extend';

export type ExtendDiagramState = BasicDiagramState & {
  counter: number;
}

type ExtendDiagramModelType = {
  namespace: string;
  state: ExtendDiagramState;
  reducers: {
    delete: Reducer<ExtendDiagramState>;
    increase: Reducer<ExtendDiagramState>;
  };
};

const ExtModel: ExtendDiagramModelType = modelExtend(Model, {
  namespace: 'extendDiagram',
  state: {
    listData: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
      { name: 'antd', id: 3 },
    ],
    counter: 3,
  },
  reducers: {
    increase(state: ExtendDiagramState) {
      if (state)
        return {
          ...state,
          counter: state.counter + 1
        };
      return {}
    }
  }
}) as ExtendDiagramModelType;

export default ExtModel;
