import type { Reducer } from 'umi';

export type ListItem = {
  name: string,
  id: number
}

export type BasicDiagramModelType = {
  namespace: string;
  state: ListItem[];
  reducers: {
    delete: Reducer<ListItem[]>;
  };
};

const Model: BasicDiagramModelType = {
  namespace: 'basicDiagram',  // 经测试，这里的 namespace 会直接与全局 state 中的相关属性绑定

  state: [
    { name: 'dva', id: 1 },
    { name: 'antd', id: 2 },
  ],

  reducers: {
    delete(state, { payload }) {
      if (state)
        return state.filter(item => item.id !== payload);
      return [];
    }
  }
};

export default Model;
