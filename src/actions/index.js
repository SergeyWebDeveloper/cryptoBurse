import {FETCH_START_TICKER,FETCH_START_TRADES} from './types';

export const fetchTicker = () => {
	return {
		type: FETCH_START_TICKER
	}
};

export const fetchTrades = name => {
	return {
		type: FETCH_START_TRADES,
		payload: name
	}
};
