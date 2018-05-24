import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTicker} from '../actions/index';
import {Spin} from 'antd';
import TickerItem from '../components/TickerItem';

class Ticker extends PureComponent {

	componentDidMount() {
		this.props.fetchTicker();
	}

	renderTickers = () => {
		const {tickers} = this.props.cripto;
		return <table>
			<thead className='ant-table-thead'>
			<tr>
				<th>Название</th>
				<th>max цена покупки</th>
				<th>min цена покупки</th>
				<th>Средняя цена за 24 часа</th>
				<th>Сумма сделок за 24 часа</th>
				<th>Список сделок по валютной паре</th>
			</tr>
			</thead>
			<tbody className='ant-table-tbody'>
			{Object.keys(tickers).map(tickerName => {
				return <TickerItem name={tickerName} key={tickerName} ticker={tickers[tickerName]}/>
			})}
			</tbody>
		</table>
	};

	render() {
		const {loading, tickers,errors} = this.props.cripto;
		return (
			<div className='ant-table ant-table-large ant-table-scroll-position-left'>
				{loading && <Spin size="large"/>}
				{Object.keys(tickers).length ? this.renderTickers() : null}
				{errors&&<strong>{errors}</strong>}
			</div>
		);
	}
}

Ticker.propTypes = {
	fetchTicker: PropTypes.func.isRequired,
	cripto: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	cripto: state.cripto
});

export default connect(mapStateToProps, {fetchTicker})(Ticker);
