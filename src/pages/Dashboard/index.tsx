import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './styles';

import Aside from '../../components/Aside';

const Dashboard: React.FC = () => {
	return (
		<Container>
			<Aside />
			<Outlet />
		</Container>
	);
};

export default Dashboard;
