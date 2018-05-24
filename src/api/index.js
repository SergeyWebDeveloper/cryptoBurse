import axios from 'axios';

const URL_TICKER = 'https://api.exmo.com/v1/ticker/';
const URL_TRADES = 'https://api.exmo.com/v1/trades/?pair=';

export const ticker = () => {
	return axios.get(URL_TICKER);
};

export const trades = (name) => {
	return axios.post(`${URL_TRADES}${name}`)
};