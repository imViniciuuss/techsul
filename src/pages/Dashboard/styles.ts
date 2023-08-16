import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	background-color: #101012;

	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;
