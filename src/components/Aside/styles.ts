import styled from 'styled-components';

export const Container = styled.div`
	width: 25%;
	height: 100%;
	padding: 60px 48px 0;
	background-color: #18181b;

	.active {
		transition: all ease-in-out 0.2s;
		border-radius: 5px;
		background-color: #2b2b30;
	}

	.Aside-Content {
		display: flex;
		flex-direction: column;
		gap: 60px;

		> img {
			width: 130px;
			height: 23px;
		}

		.Nav-Content {
			display: flex;
			flex-direction: column;
			gap: 10px;

			:hover {
				transition: all ease-in-out 0.5s;
				border-radius: 5px;
				background-color: #2b2b30;
			}

			.Nav {
				display: flex;
				align-items: center;
				padding: 8px;
				border-radius: 5px;
				gap: 15px;

				span {
					color: #c8c8c8;
					font-weight: 400;
				}
			}
		}
	}

	@media screen and (max-width: 1024px) {
		width: 100%;
		height: auto;
		padding: 0px;

		.Aside-Content {
			display: flex;
			flex-direction: column;
			padding: 20px;
			gap: 20px;
		}
	}
`;
