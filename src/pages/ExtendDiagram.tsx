import { connect } from 'dva';
import type { Dispatch } from 'umi';
import ProductList from '@/components/ProductList';
import type { ExtendDiagramState } from '@/models/extendDiagram';
import type { ConnectState } from '@/models/connect';

export type ExtendDiagramProps = {
  dispatch: Dispatch;
  data: ExtendDiagramState;
};

const ExtendDiagram = ({ dispatch, data }: ExtendDiagramProps) => {
  const { listData, counter } = data;
  function handleDelete(id: number) {
    dispatch({
      type: 'extendDiagram/delete',    // 经测试，这里的 extendDiagram 需要与当前 page 路径保持一致
      payload: id,
    });
  }
  return (
    <div>
      <h2>此页面对基础 Model 进行扩展</h2>
      <ProductList onDelete={handleDelete} products={listData} />
      <div>Counter: {counter};</div>
    </div>
  );
}

export default connect(({ extendDiagram }: ConnectState) => {
  return {
    data: extendDiagram
  }
})(ExtendDiagram);
