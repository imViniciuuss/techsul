import { Container } from './styles';
import Arrow from '../../../assets/images/ArrowBack.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Api } from '../../../providers/Api';

export default function NewServices() {
	const [service, setService] = useState('');
	const [price, setPrice] = useState('');
	const [callId, setCallId] = useState<number>(1);

	const navigate = useNavigate();

	useEffect(() => {
		const storedServiceId = localStorage.getItem('callId');
		if (storedServiceId) {
			setCallId(parseInt(storedServiceId));
		}
	}, []);

	const handleCreateService = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (service.trim() === '' || price === '') {
			alert('Preencha os campos corretamente!');
			return;
		}

		try {
			const requestData = {
				callId: callId,
			};

			const response = await Api.post('services', {
				name: service,
				price: parseFloat(price),
				...requestData,
			});

			localStorage.setItem('callId', (callId + 1).toString());
			setService(response.data);
			alert('Serviço criado!');
			navigate('/servicos');
		} catch (error) {
			console.error('Erro ao criar serviço:', error);
		}
	};

	return (
		<Container>
			<header>
				<NavLink to='/'>
					<button>
						<img
							src={Arrow}
							alt='Back'
						/>
						<h1>Voltar</h1>
					</button>
				</NavLink>
				<h1>Cadastrar serviço</h1>
			</header>

			<section>
				<form onSubmit={(e) => handleCreateService(e)}>
					<input
						type='text'
						placeholder='Digite o nome do serviço'
						value={service}
						onChange={(e) => setService(e.target.value)}
					/>
					<input
						type='number'
						placeholder='Digite o preço do serviço'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
					<button type='submit'>
						<span>Criar serviço</span>
					</button>
				</form>
			</section>
		</Container>
	);
}
