import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';
import type { ListItem } from '@/models/basicDiagram';

export type ProductListProps = {
  onDelete: (id: number) => void;
  products: ListItem[];
};

function ProductList({ onDelete, products }: ProductListProps) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text: string, record: ListItem) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

  return <Table rowKey="id" dataSource={products} columns={columns} />;
}

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
