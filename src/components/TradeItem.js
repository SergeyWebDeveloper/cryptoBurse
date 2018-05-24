import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const TradeItem = ({trade}) => {
	return (
		<Fragment>
			<ul>
				<li><strong>Тип сделки:</strong> {trade.type}</li>
				<li><strong>Цена сделки:</strong> {trade.price}</li>
				<li><strong>Кол-во по сделке</strong> {trade.quantity}</li>
				<li><strong>Кол-во по сделке</strong> {trade.quantity}</li>
				<li><strong>Сумма сделки</strong> {trade.amount}</li>
				<li><strong>Дата и время сделки</strong> {moment.unix(trade.date).format('YYYY-MM-DD, HH:mm:ss')}</li>
			</ul>
			<hr/>
		</Fragment>
	);
};

TradeItem.propTypes = {
	trade: PropTypes.object.isRequired
};

export default TradeItem;
