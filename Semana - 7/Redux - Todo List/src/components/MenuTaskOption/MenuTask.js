import React from 'react';
import { useReduxState } from '../../redux/react-redux-f4';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ContainerMenu = styled.div`
	display: flex;
	
`
const ButtonMenu = styled(Button)`
	margin: 5px;

`

const MenuTask = () => {
	const state = useReduxState();

	return (
		<ContainerMenu>
			<ButtonMenu>Marcar todas as tarefas</ButtonMenu>
			<ButtonMenu
				variant="outlined" color="secondary"
			>Todas</ButtonMenu>
			<ButtonMenu
				variant="outlined" color="secondary"
			>Pendentes</ButtonMenu>
			<ButtonMenu
				variant="outlined" color="secondary"
			>Completas</ButtonMenu>
			<ButtonMenu>Remover completas</ButtonMenu>
		</ContainerMenu>
	)
}

export default MenuTask;