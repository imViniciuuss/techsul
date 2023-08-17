import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 25%);
	padding: 100px 100px 40px;

	header {
		/* width: 85%; */
		display: flex;
		/* flex-direction: row; */
		justify-content: space-between;

		button {
			display: flex;
			align-items: center;
			gap: 20px;
			background-color: transparent;

			cursor: pointer;

			> h1 {
				color: #eab308;
				/* text-align: right; */
				font-size: 24px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
			}
		}

		> h1 {
			color: #fff;
			text-align: right;
			font-size: 32px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
		}
	}

	section {
		display: flex;
		margin-top: 46px;
		background-color: #18181b;
		/* width: 85%; */

		form {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 10px;
			padding: 40px;

			input {
				padding: 0px 25px;
				height: 48px;
				border-radius: 5px;
				background: #373737;
				color: #fff;
				font-size: 16px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;

				outline: none;
			}

			select {
				padding: 0px 25px;
				height: 48px;
				border-radius: 5px;
				background: #373737;

				color: #fff;
				font-size: 16px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;

				outline: none;
				list-style: none;

				border: none;
				cursor: pointer;
			}

			button {
				display: flex;
				height: 48px;
				/* padding: 23px 25px; */
				justify-content: center;
				align-items: center;
				align-self: stretch;

				border-radius: 5px;
				background: #eab308;

				cursor: pointer;

				span {
					color: #fff;
					font-size: 20px;
					font-style: normal;
					font-weight: 700;
					line-height: normal;
				}
			}
		}
	}

	@media screen and (max-width: 1024px) {
		background: red;
		width: 100%;
		height: 100%;
		padding: 20px;

		header {
			width: 100%;
			align-items: center;
			/* background-color: green; */

			h1 {
				font-size: 20px;
			}

			button {
				h1 {
					font-size: 20px;
				}

				img {
					width: 20px;
					height: 20px;
				}
			}
		}

		section {
			form {
				padding: 20px;
			}
		}
	}
`;
