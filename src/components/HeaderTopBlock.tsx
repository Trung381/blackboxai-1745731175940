import React from 'react';
import { Row, Col } from 'antd';

const HeaderTopBlock: React.FC = () => {
  return (
    <div className="bg-gray-100 py-2 px-4 text-sm text-gray-700">
      <Row justify="space-between" align="middle">
        <Col>Welcome to our website!</Col>
        <Col>Contact us: info@example.com | +123 456 7890</Col>
      </Row>
    </div>
  );
};

export default HeaderTopBlock;
