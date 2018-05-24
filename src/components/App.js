import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router-dom";

import Ticker from '../pages/Ticker';
import Trades from '../pages/Trades';
import NotFound from '../pages/NotFound';

import 'antd/dist/antd.css';

const style = {
	width: '90%',
	margin: '0 auto',
	padding: '0 15px'
};

class App extends Component {
	render() {
		return (
			<div style={style}>
				<h1>{this.props.title}</h1>
				<Switch>
					<Route exact path='/' component={Ticker}/>
					<Route exact path='/:name' component={Trades}/>
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

App.defaultProps = {
	title: 'Биржа Exmo'
};

App.propTypes = {
	title: PropTypes.string.isRequired
};

export default App;
