import axios from 'axios';

const BASE_URL = 'https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png';
const ACCESS_TOKEN = 'XCXmyGjWPAMXZrmZPIpR';

const fetchMapData = async (selectedRegion) => {
  try {
    // Fetch map tiles from MapTiler API with access token
    const response = await axios.get(BASE_URL, {
      params: {
        access_token: ACCESS_TOKEN,
      },
    });

    // Fetch additional region-specific data from your own API
    const regionDataResponse = await axios.get(`YOUR_OWN_API_ENDPOINT/${selectedRegion}`);
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
