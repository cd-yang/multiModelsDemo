import { connect } from 'dva';
import type { Dispatch } from 'umi';
import ProductList from '@/components/ProductList';
import type { BasicDiagramState } from '@/models/basicDiagram';
import type { ConnectState } from '@/models/connect';

export type BasicDiagramProps = {
  dispatch: Dispatch;
  data: BasicDiagramState;
};

const BasicDiagram = ({ dispatch, data }: BasicDiagramProps) => {
  const { listData } = data;
  function handleDelete(id: number) {
    dispatch({
      type: 'basicDiagram/delete',    // 经测试，这里的 basicDiagram 需要与当前 page 路径保持一致
      payload: id,
    });
  }
  return (
    <div>
      <h2>此页面绑定了一个基础 Model</h2>
      <ProductList onDelete={handleDelete} products={listData} />
    </div>
  );
}

export default connect(({ basicDiagram }: ConnectState) => {
  return {
    data: basicDiagram
  }
})(BasicDiagram);
