import axios from 'axios';

export const fetchData = async (url, dataKey = 'meals') => {
  try {
    const response = await axios.get(url);
    return response.data[dataKey];
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
