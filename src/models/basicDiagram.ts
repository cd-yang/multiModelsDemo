import type { Reducer } from 'umi';

export type ListItem = {
  name: string,
  id: number
}

export type BasicDiagramState = {
  listData: ListItem[];
}

export type BasicDiagramModelType = {
  namespace: string;
  state: BasicDiagramState;
  reducers: {
    delete: Reducer<BasicDiagramState>;
  };
};

const Model: BasicDiagramModelType = {
  namespace: 'basicDiagram',  // 经测试，这里的 namespace 会直接与全局 state 中的相关属性绑定

  state: {
    listData: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ]
  },

  reducers: {
    delete(state, { payload }) {
      if (state)
        return {
          ...state,
          listData: state.listData.filter(item => item.id !== payload)
        };
      return {} as BasicDiagramState;
    }
  }
};

export default Model;
