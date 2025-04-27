import React, { useState } from 'react';
import { Input, Button, message } from 'antd';

const SubscribeComponent: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      message.success(`Subscribed with ${email}`);
      setEmail('');
    } else {
      message.error('Please enter a valid email address');
    }
  };

  return (
    <div className="py-10 px-6 bg-gray-100 text-center">
      <h2 className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h2>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ maxWidth: 400, margin: '0 auto 1rem' }}
      />
      <Button type="primary" onClick={handleSubscribe}>
        Subscribe
      </Button>
    </div>
  );
};

export default SubscribeComponent;
