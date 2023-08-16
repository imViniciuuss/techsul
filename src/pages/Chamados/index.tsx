import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import boxIcon from '../../assets/images/boxIcon.svg';
import notFound from '../../assets/images/notFound.svg';
import { Api } from '../../providers/Api';
import { IListItems } from '../../interfaces/ListItems';

const Chamados: React.FC = () => {
	const [listCalls, setListCalls] = useState<IListItems[]>([]);
	const [loadingCalls, setLoadingCalls] = useState(true);

	const fetchCalls = async () => {
		try {
			const response = await Api.get('/calls');
			setListCalls(response.data);
			setLoadingCalls(false);
		} catch (error) {
			console.log('Erro ao buscar os serviços', error);
		}
	};

	useEffect(() => {
		fetchCalls();
		console.log('Lista de chamados!');
	}, []);

	return (
		<Container>
			<header>
				<h1>Chamados ({listCalls.length})</h1>
				<NavLink to='/chamados/new'>
					<button>
						<span>Novo chamado</span>
					</button>
				</NavLink>
			</header>

			{loadingCalls ? (
				<p style={{ color: 'white' }}>Carregando...</p>
			) : listCalls.length === 0 ? (
				<div className='NotFound'>
					<img
						src={notFound}
						alt='Empty!'
					/>
				</div>
			) : (
				<section>
					{listCalls.map((item) => (
						<article key={item.id}>
							<div className='Content'>
								<div className='Wrapper'>
									<img
										src={boxIcon}
										alt='Box Icon'
									/>
									<span>{item.name}</span>
								</div>
								<span>{item.services[0].name}</span>
							</div>
							<span>RS {item.services[0].price}</span>
						</article>
					))}
				</section>
			)}
		</Container>
	);
};

export default Chamados;
