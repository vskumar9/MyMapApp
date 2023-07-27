import React from "react";
import { Layout } from "antd";
import { useSelector } from 'react-redux';

const { Footer } = Layout;

const FooterSection = () => {
  const isNightMode = useSelector((state) => state.map.isNightMode);

  const footerStyle = {
    color: isNightMode ? 'white' : 'black',
    backgroundColor: isNightMode ? '#333' : '#f0f2f5',
    height: '100px',
  };

  return (
    <Footer style={footerStyle}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
      mollitia sint. Quo necessitatibus veniam excepturi velit, consectetur
      mollitia similique, amet ut nostrum nulla distinctio veritatis tempora
      voluptatum aspernatur obcaecati ea.
    </Footer>
  );
};

export default FooterSection;
