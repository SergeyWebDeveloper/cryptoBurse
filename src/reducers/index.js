import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import cripto from './cripto';

export default combineReducers({
	router: routerReducer,
	cripto
});