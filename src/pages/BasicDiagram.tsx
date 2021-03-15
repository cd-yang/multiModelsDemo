import { connect } from 'dva';
import type { Dispatch } from 'umi';
import ProductList from '@/components/ProductList';
import type { ListItem } from '@/models/basicDiagram';

type BasicDiagramState = {
  basicDiagram: ListItem[];
}

export type BasicDiagramProps = {
  dispatch: Dispatch;
  state: BasicDiagramState;
};

const BasicDiagram = ({ dispatch, state }: BasicDiagramProps) => {
  function handleDelete(id: number) {
    dispatch({
      type: 'basicDiagram/delete',    // 经测试，这里的 basicDiagram 需要与当前 page 路径保持一致
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={state.basicDiagram} />
    </div>
  );

}

const mapStateToProps = (state: BasicDiagramState) => {
  return {
    state
  }
}

export default connect(
  mapStateToProps
)(BasicDiagram);
