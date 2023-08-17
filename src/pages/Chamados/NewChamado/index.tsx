import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Api } from '../../../providers/Api';
import { IService } from '../../../interfaces/Service';

import { Container } from './styles';

import Arrow from '../../../assets/images/ArrowBack.svg';

export default function NewChamado() {
	const [customerClient, setCustomerClient] = useState('');
	const [selectedServices, setSelectedServices] = useState<IService[]>([]);
	const [listServices, setListServices] = useState<IService[]>([]);

	const navigate = useNavigate();

	const handleCreateCall = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (customerClient.trim() === '') {
			alert('Forneça um usuário!');
			return;
		}

		try {
			const response = await Api.post('/calls', {
				name: customerClient,
				services: selectedServices,
			});
			alert('Chamado criado!');
			navigate('/chamados');
			setCustomerClient(response.data);

			setCustomerClient('');
		} catch (error) {
			console.log('Erro ao criar chamado', error);
		}
	};

	const handleChangeSelect = (id: string) => {
		const number = parseInt(id);
		const selectService = listServices.find((item) => item.id === number);

		if (
			selectService &&
			!selectedServices.some((service) => service.id === selectService.id)
		) {
			setSelectedServices([selectService]);
			console.log(selectService);
		}
	};

	const fetchServices = async () => {
		try {
			const response = await Api.get('services');
			setListServices(response.data);

			if (response.data.length > 0) {
				setSelectedServices([response.data[0]]);
			}
		} catch (error) {
			console.log('Erro ao buscar os serviços', error);
		}
	};

	useEffect(() => {
		fetchServices();
	}, []);

	return (
		<Container>
			<header>
				<NavLink to='/chamados'>
					<button>
						<img
							src={Arrow}
							alt='Back'
						/>
						<h1>Voltar</h1>
					</button>
				</NavLink>
				<h1>Cadastrar chamado</h1>
			</header>

			<section>
				<form onSubmit={(e) => handleCreateCall(e)}>
					<input
						type='text'
						placeholder='Digite o nome do cliente'
						value={customerClient}
						onChange={(e) => setCustomerClient(e.target.value)}
					/>
					<select onChange={(e) => handleChangeSelect(e.target.value)}>
						{listServices.map((service) => (
							<option
								key={service?.id}
								value={service?.id}>
								{service?.name}
							</option>
						))}
					</select>
					<button type='submit'>
						<span>Criar chamado</span>
					</button>
				</form>
			</section>
		</Container>
	);
}
