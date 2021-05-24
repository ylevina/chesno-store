import Axios from 'axios';

export const BASE_URL = 'http://localhost:5000/api';

export const storeServer = Axios.create({
    baseURL: BASE_URL,
    headers: {      
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    crossDomain: true
  });