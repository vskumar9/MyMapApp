import React from 'react';
import { Layout, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNightMode } from '../actions/mapActions';

const { Sider } = Layout;

const Sidebar = () => {
  // Get the current night mode state from the Redux store using useSelector hook
  const isNightMode = useSelector((state) => state.map.isNightMode);

  // Dispatch the toggleNightMode action to update the night mode state in the Redux store
  const dispatch = useDispatch();

  const handleNightModeToggle = () => {
    // Dispatch the toggleNightMode action
    dispatch(toggleNightMode());
  };

  return (
    <Sider collapsible className={isNightMode ? 'dark-mode' : 'light-mode'}>
      <div className="night-mode-toggle">
        <Switch checked={isNightMode} onChange={handleNightModeToggle} />
        <span>Night Mode</span>
      </div>
      {/* Add other sidebar content here */}
    </Sider>
  );
};

export default Sidebar;
