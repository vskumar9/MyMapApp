import React from 'react';
import { Card } from 'antd';
import { useSelector } from 'react-redux';

const RegionInfo = () => {
  const regionInfo = useSelector((state) => state.map.regionInfo);
  const isNightMode = useSelector((state) => state.map.isNightMode);
  const renderRegionInfo = () => {
    if (!regionInfo) {
      return <p>No region information available.</p>;
    }

    const textStyle = {
      color: isNightMode ? 'white' : 'black',
    };

    return (
      <>
        <p style={textStyle}>Currency Symbol: {regionInfo.currency}</p>
        <p style={textStyle}>Units of Speed: {regionInfo.speedUnit}</p>
        <p style={textStyle}>Units of Distance: {regionInfo.distanceUnit}</p>
        <p style={textStyle}>Units of Volume: {regionInfo.volumeUnit}</p>
        <p style={textStyle}>Timezone(s) Information: {regionInfo.timezones.join(', ')}</p>
      </>
    );
  };

  const cardStyle = {
    backgroundColor: isNightMode ? '#333' : '#f0f2f5',
    borderColor: isNightMode ? '#444' : '#d9d9d9',
  };

  return (
    <Card title="Region Info" style={cardStyle}>
      {renderRegionInfo()}
    </Card>
  );
};

export default RegionInfo;
