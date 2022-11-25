import axios from 'axios';

const healthyApi = axios.create({
  baseURL: 'https://virtserver.swaggerhub.com/duynhanf/arent-health-api/1.0.0',
  headers: { 'Content-Type': 'application/json' },
});

export { healthyApi };
