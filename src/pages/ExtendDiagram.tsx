import { connect } from 'dva';
import type { Dispatch } from 'umi';
import ProductList from '@/components/ProductList';
import type { ListItem } from '@/models/basicDiagram';

export type ExtendDiagramState = {
  extendDiagram: ListItem[];
}

export type ExtendDiagramProps = {
  dispatch: Dispatch;
  state: ExtendDiagramState;
};

const ExtendDiagram = ({ dispatch, state }: ExtendDiagramProps) => {
  function handleDelete(id: number) {
    dispatch({
      type: 'extendDiagram/delete',    // 经测试，这里的 extendDiagram 需要与当前 page 路径保持一致
      payload: id,
    });
  }
  return (
    <div>
      <h2>此页面对基础 Model 进行扩展</h2>
      <ProductList onDelete={handleDelete} products={state.extendDiagram} />
    </div>
  );
}

export default connect(
  (state: ExtendDiagramState) => {
    return {
      state
    }
  }
)(ExtendDiagram);
