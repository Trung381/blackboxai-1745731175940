import React from 'react';
import { Card, Button } from 'antd';

const featuredProducts = [
  {
    key: '1',
    title: 'Featured Product 1',
    imageUrl: 'https://via.placeholder.com/300x200?text=Featured+1',
    description: 'Description for featured product 1',
  },
  {
    key: '2',
    title: 'Featured Product 2',
    imageUrl: 'https://via.placeholder.com/300x200?text=Featured+2',
    description: 'Description for featured product 2',
  },
  {
    key: '3',
    title: 'Featured Product 3',
    imageUrl: 'https://via.placeholder.com/300x200?text=Featured+3',
    description: 'Description for featured product 3',
  },
];

const FeaturedProduct: React.FC = () => {
  return (
    <div className="py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
      <div className="flex gap-6 overflow-x-auto">
        {featuredProducts.map((product) => (
          <Card
            key={product.key}
            hoverable
            style={{ width: 300, borderRadius: 8, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            cover={<img alt={product.title} src={product.imageUrl} />}
          >
            <Card.Meta title={product.title} description={product.description} />
            <Button type="primary" className="mt-4">
              Buy Now
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
