import {call, put} from "redux-saga/effects";
import {
	ERROR,
	FETCH_FINISH_TRADES
} from '../actions/types';
import {trades} from '../api';


export function* fetchLoadTrade(action) {
	try {
		const {data} = yield call(trades, action.payload);
		yield put({
			type: FETCH_FINISH_TRADES,
			payload: data
		});
	} catch (e) {
		yield put({
			type: ERROR,
			payload: 'Произошла ошибка. Попробуйте снова!'
		});
	}
}