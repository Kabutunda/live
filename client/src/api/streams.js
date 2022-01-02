import axios from 'axios';

const streamsApi = axios.create({
  baseURL: 'http://3005',
});

export default streamsApi;
