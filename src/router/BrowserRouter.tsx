import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Chamados from '../pages/Chamados';
import Servicos from '../pages/Servicos';
import Profile from '../pages/Profile';
import NewChamado from '../pages/Chamados/NewChamado';
import NewServices from '../pages/Servicos/NewServices';

export const BrowserRouter = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
		children: [
			{
				path: '/chamados',
				element: <Chamados />,
			},
			{
				path: '/chamados/new',
				element: <NewChamado />,
			},
			{
				path: '/servicos',
				element: <Servicos />,
			},
			{
				path: '/servicos/new',
				element: <NewServices />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
]);
