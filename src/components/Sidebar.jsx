import React from 'react';
import { Layout, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNightMode } from '../actions/mapActions';
import '../App.css'; 

const { Sider } = Layout;

const Sidebar = () => {
  const isNightMode = useSelector((state) => state.map.isNightMode);

  const dispatch = useDispatch();

  const handleNightModeToggle = () => {
    dispatch(toggleNightMode());
  };

  return (
    <Sider collapsible className={isNightMode ? 'dark-mode' : 'light-mode'}>
      <div className="night-mode-toggle">
        <Switch checked={isNightMode} onChange={handleNightModeToggle} />
        <span>Night Mode</span>
      </div>
    </Sider>
  );
};

export default Sidebar;
