import React from 'react';
import { Card } from 'antd';

interface CardProductProps {
  title: string;
  imageUrl: string;
  price: string;
}

const CardProduct: React.FC<CardProductProps> = ({ title, imageUrl, price }) => {
  return (
    <Card
      hoverable
      cover={<img alt={title} src={imageUrl} />}
      style={{ width: 240, borderRadius: 8, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
      className="transition-transform duration-300 ease-in-out"
    >
      <Card.Meta title={title} description={price} />
    </Card>
  );
};

export default CardProduct;
