import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export function getReviews() {
  return axios.get('/reviews');
}

export function getRequest(obj) {
  return axios.post('/requests', obj);
}
