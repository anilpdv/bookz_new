import config from '../lib/config';
import configureStore from '../store/configureStore';

export const fetchBooksDataRequest = (query) =>
  fetch(`${config.API_URL}/books/search?q=${query}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);

export const fetchLatestBooksRequest = () => {
  let t = new Date().toJSON().split('T');
  let tiemstamp = t[0] + ' ' + t[1].split('.')[0];

  // query = &timenewer=2020-09-20%2017:01:05
  return fetch(`${config.LATEST_URL}&timenewer=${tiemstamp}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};
