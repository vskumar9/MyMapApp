import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterSection = () => {
  return (
    <Footer style={{ color: 'black', height: '100px' }}>
      Plain text footer
    </Footer>
  );
};

export default FooterSection;
