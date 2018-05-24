import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h2>Страница не найдена!</h2>
			<Link className='btn btn-primary' to='/'>Вернуться на главную</Link>
		</div>
	);
};

export default NotFound;
