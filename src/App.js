import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import HeaderSection from './components/Header';
import FooterSection from './components/Footer';
import Sidebar from './components/Sidebar';
import OSMMap from './components/OSMMap';
import FormInput from './components/FormInput';
import RegionInfo from './components/RegionInfo';
import './App.css';

const { Content } = Layout;

const App = () => {
  // Get the isNightMode state from the Redux store
  const isNightMode = useSelector((state) => state.map.isNightMode);

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isNightMode]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sidebar />
    <Layout>
      <HeaderSection />
      <div style={{ padding: '20px' }}>
        <Content>
          <div style={{ height: '100%', width: '100%' }}>
            <FormInput />
            <OSMMap />
            <RegionInfo />
          </div>
        </Content>
      </div>
      <FooterSection />
    </Layout>
  </Layout>
);
};

export default App;
