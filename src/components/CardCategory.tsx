import React from 'react';
import { Card } from 'antd';

interface CardCategoryProps {
  title: string;
  imageUrl: string;
  shadow?: boolean;
  hoverEffect?: boolean;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  title,
  imageUrl,
  shadow = true,
  hoverEffect = true,
}) => {
  return (
    <Card
      hoverable={hoverEffect}
      style={{
        boxShadow: shadow ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
        borderRadius: 8,
        overflow: 'hidden',
      }}
      cover={<img alt={title} src={imageUrl} />}
      className="transition-transform duration-300 ease-in-out"
    >
      <Card.Meta title={title} />
    </Card>
  );
};

export default CardCategory;
