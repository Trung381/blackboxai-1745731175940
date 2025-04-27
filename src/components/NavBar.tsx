import React from 'react';
import { Menu } from 'antd';

const items = [
  { key: 'home', label: 'Home' },
  { key: 'products', label: 'Products' },
  { key: 'about', label: 'About' },
  { key: 'contact', label: 'Contact' },
];

const NavBar: React.FC = () => {
  return (
    <Menu mode="horizontal" items={items} />
  );
};

export default NavBar;
