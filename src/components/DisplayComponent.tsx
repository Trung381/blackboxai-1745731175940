import React from 'react';
import { Button } from 'antd';

const displayItems = [
  {
    key: '1',
    imageUrl: 'https://via.placeholder.com/300x200?text=Display+1',
    title: 'Display Item 1',
    description: 'Description for display item 1',
    buttonText: 'Learn More',
    buttonLink: '#',
  },
  {
    key: '2',
    imageUrl: 'https://via.placeholder.com/300x200?text=Display+2',
    title: 'Display Item 2',
    description: 'Description for display item 2',
    buttonText: 'Shop Now',
    buttonLink: '#',
  },
  {
    key: '3',
    imageUrl: 'https://via.placeholder.com/300x200?text=Display+3',
    title: 'Display Item 3',
    description: 'Description for display item 3',
    buttonText: 'Contact Us',
    buttonLink: '#',
  },
];

const DisplayComponent: React.FC = () => {
  return (
    <div className="py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {displayItems.map((item) => (
        <div key={item.key} className="bg-white shadow rounded p-4 flex flex-col items-center text-center">
          <img src={item.imageUrl} alt={item.title} className="mb-4 rounded" />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="mb-4">{item.description}</p>
          <Button type="primary" href={item.buttonLink}>
            {item.buttonText}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DisplayComponent;
