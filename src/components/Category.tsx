import React from 'react';
import CardCategory from './CardCategory';
import { Row, Col } from 'antd';

interface CategoryItem {
  key: string;
  title: string;
  imageUrl: string;
}

const categories: CategoryItem[] = [
  { key: '1', title: 'Category 1', imageUrl: 'https://via.placeholder.com/300x200?text=Category+1' },
  { key: '2', title: 'Category 2', imageUrl: 'https://via.placeholder.com/300x200?text=Category+2' },
  { key: '3', title: 'Category 3', imageUrl: 'https://via.placeholder.com/300x200?text=Category+3' },
  { key: '4', title: 'Category 4', imageUrl: 'https://via.placeholder.com/300x200?text=Category+4' },
];

const Category: React.FC = () => {
  return (
    <div className="py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <Row gutter={[16, 16]}>
        {categories.map((category) => (
          <Col key={category.key} xs={24} sm={12} md={8} lg={6}>
            <CardCategory title={category.title} imageUrl={category.imageUrl} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;
