import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTrades} from '../actions';
import {Spin} from 'antd';

import TradeItem from '../components/TradeItem';

class Trades extends Component {
	componentDidMount() {
		if (this.props.match.params.name) {
			this.props.fetchTrades(this.props.match.params.name);
		}
	}

	renderTrade = () => {
		const {trade} = this.props.cripto;
		return trade[Object.keys(trade)[0]].map(tradeItem => {
			return <TradeItem trade={tradeItem} key={tradeItem.trade_id}/>;
		})
	};

	render() {
		const {loading, trade, errors} = this.props.cripto;
		return (
			<div>
				<h2>{this.props.match.params.name}</h2>
				{loading && <Spin size="large"/>}
				{Object.keys(trade).length ? this.renderTrade() : null}
				{errors && <strong>{errors}</strong>}
			</div>
		);
	}
}

Trades.propTypes = {
	fetchTrades: PropTypes.func.isRequired,
	cripto: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	cripto: state.cripto
});

export default connect(mapStateToProps, {fetchTrades})(Trades);
