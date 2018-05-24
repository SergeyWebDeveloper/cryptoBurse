import {
	FETCH_FINISH_TICKER,
	FETCH_START_TICKER,
	FETCH_START_TRADES,
	FETCH_FINISH_TRADES,
	ERROR
} from '../actions/types';

const initialState = {
	loading: false,
	tickers: {},
	trade: {},
	errors: ''
};

export default (state = initialState, {type, payload}) => {
	switch (type) {
		case FETCH_START_TICKER:
		case FETCH_START_TRADES:
			return {
				...state,
				loading: true
			};
		case FETCH_FINISH_TICKER:
			return {
				...state,
				loading: false,
				tickers: payload
			};
		case ERROR:
			return {
				...state,
				loading: false,
				errors: payload
			};
		case FETCH_FINISH_TRADES:
			return {
				...state,
				loading: false,
				trade: payload
			};
		default:
			return state;
	}
}