import React from 'react';
import { Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const socialPlatforms = [
  { key: 'facebook', icon: <FacebookOutlined />, url: 'https://facebook.com' },
  { key: 'twitter', icon: <TwitterOutlined />, url: 'https://twitter.com' },
  { key: 'instagram', icon: <InstagramOutlined />, url: 'https://instagram.com' },
  { key: 'linkedin', icon: <LinkedinOutlined />, url: 'https://linkedin.com' },
];

const FollowOn: React.FC = () => {
  return (
    <div className="py-10 px-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
      <Space size="large">
        {socialPlatforms.map((platform) => (
          <a key={platform.key} href={platform.url} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-600 hover:text-blue-600 transition-colors">
            {platform.icon}
          </a>
        ))}
      </Space>
    </div>
  );
};

export default FollowOn;
