import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { UserOutlined, LogoutOutlined, ProfileOutlined } from '@ant-design/icons';
// import { toggleNightMode } from '../actions/mapActions';
import { useSelector } from 'react-redux';


const { Header } = Layout;





const HeaderSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isNightMode = useSelector((state) => state.map.isNightMode);


 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Header style={{ backgroundColor: isNightMode ? '#001529' : '#1890ff', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <span style={{ marginRight: '20px' }}>MyMapApp</span>
      </div>
      <div>
        {isLoggedIn ? (
          <>
            <span style={{ marginRight: '20px', cursor: 'pointer' }}>
              <ProfileOutlined /> Profile
            </span>
            <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button type="primary" icon={<UserOutlined />} onClick={handleLogin}>
            Login
          </Button>
        )}
      </div>
      {/* <div>
        <Switch checked={isNightMode} onChange={handleNightModeToggle} />
        <span>Night Mode</span>
      </div> */}
    </Header>
  );
};

export default HeaderSection;
