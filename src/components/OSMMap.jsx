import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';

const OSMMap = () => {
  const isNightMode = useSelector((state) => state.map.isNightMode);

  useEffect(() => {

    const map = L.map('map').setView([0, 0], 2);

    const tileURL = isNightMode
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
      : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    L.tileLayer(tileURL).addTo(map);

    return () => {
      map.remove();
    };
  }, [isNightMode]);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default OSMMap;
