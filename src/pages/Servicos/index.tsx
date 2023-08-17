import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import filterIcon from '../../assets/images/FilterIcon.svg';
import etiquetIcon from '../../assets/images/etiquetIcon.svg';
import notFound from '../../assets/images/notFound.svg';
import { NavLink } from 'react-router-dom';
import { Api } from '../../providers/Api';
import { IService } from '../../interfaces/Service';

const Servicos: React.FC = () => {
	const [dataServices, setDataServices] = useState<IService[]>([]);
	const [loadingServices, setLoadingServices] = useState(true);

	const fetchServices = async () => {
		try {
			const response = await Api.get('/services');
			setDataServices(response.data);
			console.log(response.data);
			setLoadingServices(false);
			console.log('Listar Serviços!');
		} catch (error) {
			console.log('Erro ao buscar os serviços', error);
		}
	};

	useEffect(() => {
		fetchServices();
		console.log('Lista de Serviços!');
	}, []);

	return (
		<Container>
			<header>
				<h1>Serviços ({dataServices.length})</h1>
				<div className='WrapperService'>
					<NavLink to='/servicos/new'>
						<button>
							<span>Novo serviço</span>
						</button>
					</NavLink>
					<img
						src={filterIcon}
						alt=''
					/>
				</div>
			</header>

			{loadingServices ? (
				<p style={{ color: 'white' }}>Carregando...</p>
			) : dataServices.length === 0 ? (
				<div className='NotFound'>
					<img
						src={notFound}
						alt='Empty!'
					/>
				</div>
			) : (
				<section>
					{dataServices.map((service) => (
						<article key={service.id}>
							<div className='Wrapper'>
								<img
									src={etiquetIcon}
									alt='Box Icon'
								/>
								<span>{service.name}</span>
							</div>
							<span>R${service.price}</span>
						</article>
					))}
				</section>
			)}
		</Container>
	);
};

export default Servicos;
