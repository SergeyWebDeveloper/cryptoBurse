import {call, put} from "redux-saga/effects";
import {
	ERROR,
	FETCH_FINISH_TICKER
} from '../actions/types';
import {ticker} from '../api';


export function* fetchLoadTicker() {
	try {
		const {data} = yield call(ticker);
		yield put({
			type: FETCH_FINISH_TICKER,
			payload: data
		});
	} catch (e) {
		console.log(e);
		yield put({
			type: ERROR,
			payload: 'Произошла ошибка'
		});
	}
}