import type { Reducer } from 'umi';
import type { ListItem } from '@/models/basicDiagram';

type ExtendDiagramModelType = {
  namespace: string;
  state: ListItem[];
  reducers: {
    delete: Reducer<ListItem[]>;
  };
};

const Model: ExtendDiagramModelType = {
  namespace: 'extendDiagram',  // 经测试，这里的 namespace 会直接与全局 state 中的相关属性绑定

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
