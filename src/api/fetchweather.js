import axios from 'axios';
import {URL, API_KEY } from '../constant';



export const Fetchweather = async (query) => {
  const { data } = await axios.get(URL, {
    params : {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    }
  });
 
  return data;
  
}

