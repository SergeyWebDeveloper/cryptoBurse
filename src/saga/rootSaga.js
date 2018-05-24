import {takeEvery} from 'redux-saga/effects';
import {fetchLoadTicker} from './ticker';
import {fetchLoadTrade} from './trade';
import {FETCH_START_TICKER, FETCH_START_TRADES} from '../actions/types';

export function* rootSaga() {
	yield takeEvery(FETCH_START_TICKER, fetchLoadTicker);
	yield takeEvery(FETCH_START_TRADES, fetchLoadTrade);
}