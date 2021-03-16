import type { Reducer } from 'umi';
import * as BasicModel from '@/models/basicDiagram';
import type { BasicDiagramModelType, BasicDiagramState } from '@/models/basicDiagram';
import modelExtend from 'dva-model-extend';

export type ExtendDiagramState = BasicDiagramState & {
  counter: number;
}

type ExtendDiagramModelType = {
  namespace: string;
  state: ExtendDiagramState;
  reducers: {
    delete: Reducer<ExtendDiagramState>;
  };
};

// const Model: ExtendDiagramModelType = {
//   namespace: 'extendDiagram',  // 经测试，这里的 namespace 会直接与全局 state 中的相关属性绑定

//   state: [
//     { name: 'dva', id: 1 },
//     { name: 'antd', id: 2 },
//   ],

//   reducers: {
//     delete(state, { payload }) {
//       if (state)
//         return state.filter(item => item.id !== payload);
//       return [];
//     }
//   }
// };

const Model = modelExtend(BasicModel, {
  namespace: 'extendDiagram',
  state: {
    listData: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
      { name: 'antd', id: 3 },
    ],
    counter: 3,
  },
}) as ExtendDiagramModelType;

export default Model;
