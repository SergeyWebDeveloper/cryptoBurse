import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const TickerItem = ({ticker, name}) => {
	return (
		<tr className='ant-table-row  ant-table-row-level-0'>
			<td>{name}</td>
			<td>{ticker.high}</td>
			<td>{ticker.low}</td>
			<td>{ticker.avg}</td>
			<td>{ticker.vol_curr}</td>
			<td><Link className='ant-btn ant-btn-primary' to={`/${name}`}>Узнать список сделок по {name} паре</Link></td>
		</tr>
	);
};

TickerItem.propTypes = {
	name: PropTypes.string.isRequired,
	ticker: PropTypes.object.isRequired
};

export default TickerItem;
