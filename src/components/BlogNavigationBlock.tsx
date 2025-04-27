import React from 'react';
import { Button } from 'antd';

const BlogNavigationBlock: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Visit Our Blog</h2>
      <p className="mb-6">Stay updated with the latest news and articles.</p>
      <Button type="primary" href="/blog">
        Go to Blog
      </Button>
    </div>
  );
};

export default BlogNavigationBlock;
