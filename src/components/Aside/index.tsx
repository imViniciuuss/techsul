import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import serviceIcon from '../../assets/images/servicesIcon.svg';
import userIcon from '../../assets/images/userIcon.svg';
import callIcon from '../../assets/images/callsIcon.svg';
import logo from '../../assets/images/logoIcon.svg';

interface LinkItemProps {
	name: string;
	icon: string;
	route: string;
}

const LinkItems: LinkItemProps[] = [
	{
		name: 'Chamados',
		icon: callIcon,
		route: '/chamados',
	},
	{
		name: 'Serviços',
		icon: serviceIcon,
		route: '/servicos',
	},
	{
		name: 'Minha conta',
		icon: userIcon,
		route: '/profile',
	},
];

export default function Aside() {
	return (
		<Container>
			<div className='Aside-Content'>
				<img
					src={logo}
					alt='Logo'
				/>
				<div className='Nav-Content'>
					{LinkItems.map((link) => (
						<NavLink
							key={link.name}
							to={link.route}>
							<div className='Nav'>
								<img
									src={link.icon}
									alt='Icon Type'
								/>
								<span>{link.name}</span>
							</div>
						</NavLink>
					))}
				</div>
			</div>
		</Container>
	);
}
