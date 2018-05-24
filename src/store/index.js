import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../saga/rootSaga';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducer from '../reducers';

const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware,middleware)));
sagaMiddleware.run(rootSaga);
