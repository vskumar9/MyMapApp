import axios from 'axios';

const BASE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const API_ENDPOINT = 'https://api.example.com/regions'; 
const fetchMapData = async (selectedRegion) => {
  try {
    // Fetch map tiles from OpenStreetMap API
    const response = await axios.get(BASE_URL);

    // Fetch additional region-specific data from own API
    const regionDataResponse = await axios.get(`${API_ENDPOINT}/${selectedRegion}`);
    const regionData = regionDataResponse.data;

    // Combine map data and region-specific data into a single object and return it
    const mapData = {
      mapTiles: response.data,
      regionData: regionData,
    };

    return mapData;
  } catch (error) {
    // Handle any errors that occur during fetching
    console.error('Error fetching map data:', error);
    throw error; 
  }
};

export default fetchMapData;
