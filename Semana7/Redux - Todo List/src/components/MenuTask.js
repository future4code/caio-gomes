import React from 'react';
import { useReduxState } from '../redux/react-redux-f4';
import styled from 'styled-components';

const ContainerMenu = styled.div`
	display: flex;
	border: 1px solid red;
`
const ButtonMenu = styled.button`


`

const MenuTask = () => {
	const state = useReduxState();

	return (
		<ContainerMenu>
			<ButtonMenu>Marcar todas como completas</ButtonMenu>
			<ButtonMenu>Todas</ButtonMenu>
			<ButtonMenu>Pendentes</ButtonMenu>
			<ButtonMenu>Completas</ButtonMenu>
			<ButtonMenu>Remover completas</ButtonMenu>
		</ContainerMenu>
	)
}

export default MenuTask;