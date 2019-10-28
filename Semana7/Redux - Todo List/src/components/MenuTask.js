import React from 'react';
import { useReduxState } from '../redux/react-redux-f4';

const MenuTask = () => {
	const state = useReduxState();

	return (
		<div>
			<button>Todas</button>
			<button>Pendentes</button>
			<button>Completas</button>
		</div>
	)
}

export default MenuTask;