import { connect } from 'dva';
import ProductList from '@/components/ProductList';
import { mapStateToProps } from './BasicDiagram';
import type { BasicDiagramProps } from './BasicDiagram';

const BasicDiagram2 = ({ dispatch, state }: BasicDiagramProps) => {
  function handleDelete(id: number) {
    dispatch({
      type: 'basicDiagram/delete',    // 经测试，这里的 basicDiagram 需要与当前 page 路径保持一致
      payload: id,
    });
  }

  return (
    <div>
      <h2>此页面与 Basic Diagram 绑定了同一个基础 Model，两个页面共享数据</h2>
      <ProductList onDelete={handleDelete} products={state.basicDiagram} />
    </div>
  );
}

export default connect(
  mapStateToProps
)(BasicDiagram2);
