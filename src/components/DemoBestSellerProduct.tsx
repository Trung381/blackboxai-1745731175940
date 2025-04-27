import React from 'react';
import { Button } from 'antd';
import CardProduct from './CardProduct';

const bestSellerProducts = [
  {
    key: '1',
    title: 'Best Seller 1',
    imageUrl: 'https://via.placeholder.com/200x200?text=Best+Seller+1',
    price: '$99.99',
  },
  {
    key: '2',
    title: 'Best Seller 2',
    imageUrl: 'https://via.placeholder.com/200x200?text=Best+Seller+2',
    price: '$149.99',
  },
  {
    key: '3',
    title: 'Best Seller 3',
    imageUrl: 'https://via.placeholder.com/200x200?text=Best+Seller+3',
    price: '$199.99',
  },
];

const DemoBestSellerProduct: React.FC = () => {
  return (
    <div className="py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6">Best Sellers</h2>
      <div className="flex gap-6 overflow-x-auto">
        {bestSellerProducts.map((product) => (
          <CardProduct
            key={product.key}
            title={product.title}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button type="primary">View All Products</Button>
      </div>
    </div>
  );
};

export default DemoBestSellerProduct;
