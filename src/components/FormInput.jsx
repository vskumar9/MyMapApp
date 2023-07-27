import React from 'react';
import { Select, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateRegion, fetchRegionInfo } from '../actions/mapActions';

const { Option } = Select;

const FormInput = () => {
  const dispatch = useDispatch();
  const selectedRegion = useSelector((state) => state.map.selectedRegion);
  const isNightMode = useSelector((state) => state.map.isNightMode);

  const handleRegionChange = (value) => {
    dispatch(updateRegion(value));
  };

  const handleLoadButtonClick = () => {
    dispatch(fetchRegionInfo(selectedRegion));
  };

  return (
    <div className={isNightMode ? 'dark-mode' : 'light-mode'}>
      <Select
        defaultValue="Select Region"
        style={{ width: 200 }}
        onChange={handleRegionChange}
        value={selectedRegion}
      >
        <Option value="US">United States</Option>
        <Option value="IN">India</Option>
        <Option value="UK">United Kingdom</Option>
      </Select>
      <Button type="primary" onClick={handleLoadButtonClick}>
        Load
      </Button>
    </div>
  );
};

export default FormInput;
