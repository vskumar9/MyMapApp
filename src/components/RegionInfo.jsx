import React from 'react';
import { Card } from 'antd';
import { useSelector } from 'react-redux';

const RegionInfo = () => {
  // Get the region info from the Redux store using useSelector hook
  const regionInfo = useSelector((state) => state.map.regionInfo);

  // Helper function to render the region information
  const renderRegionInfo = () => {
    if (!regionInfo) {
      return <p>No region information available.</p>;
    }

    return (
      <>
        <p>Currency Symbol: {regionInfo.currency}</p>
        <p>Units of Speed: {regionInfo.speedUnit}</p>
        <p>Units of Distance: {regionInfo.distanceUnit}</p>
        <p>Units of Volume: {regionInfo.volumeUnit}</p>
        <p>Timezone(s) Information: {regionInfo.timezones.join(', ')}</p>
      </>
    );
  };

  return (
    <Card title="Region Info">
      {renderRegionInfo()}
    </Card>
  );
};

export default RegionInfo;
