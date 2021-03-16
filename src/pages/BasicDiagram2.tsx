import { connect } from 'dva';
import ProductList from '@/components/ProductList';
import type { ConnectState } from '@/models/connect';
import type { BasicDiagramProps } from '@/pages/BasicDiagram';

const BasicDiagram2 = ({ dispatch, data }: BasicDiagramProps) => {
  const { listData } = data;
  function handleDelete(id: number) {
    dispatch({
      type: 'basicDiagram/delete',    // 经测试，这里的 basicDiagram 需要与当前 page 路径保持一致
      payload: id,
    });
  }

  return (
    <div>
      <h2>此页面与 Basic Diagram 绑定了同一个基础 Model，两个页面共享数据</h2>
      <ProductList onDelete={handleDelete} products={listData} />
    </div>
  );
}

export default connect(({ basicDiagram }: ConnectState) => {
  return {
    data: basicDiagram
  }
})(BasicDiagram2);
