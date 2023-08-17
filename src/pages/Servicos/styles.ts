import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 25%);
	padding: 100px 100px 40px;
	overflow: auto;

	/* background-color: red; */

	.NotFound {
		display: flex;
		padding-top: 80px;
		/* background-color: red; */
		/* align-items: center; */
		justify-content: center;
		height: 100%;

		> img {
			width: 180px;
			height: 180px;
		}
	}

	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		/* background-color: red; */

		.WrapperService {
			display: flex;
			gap: 20px;
			align-items: center;
		}

		h1 {
			color: #fff;
			text-align: right;
			font-size: 32px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
		}

		button {
			height: 40px;
			padding: 0px 15px 0px;
			background-color: #18181b;
			border-radius: 5px;
			/* margin-right: 20px; */

			cursor: pointer;

			> span {
				color: #fff;
				text-align: right;
				font-size: 16px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
			}
		}
	}

	section {
		/* background-color: green; */
		margin-top: 36px;
		display: flex;
		flex-direction: column;
		/* max-width: 900px; */
		gap: 12px;

		span {
			color: #afafaf;
			text-align: right;

			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		article {
			width: 100%;
			display: flex;
			padding: 20px;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;

			background-color: #18181b;
			border-radius: 5px;
		}
	}
	.Wrapper {
		display: flex;
		align-items: center;
		/* background-color: red; */
		gap: 15px;
	}

	@media screen and (max-width: 1024px) {
		/* background: red; */
		width: 100%;
		padding: 20px;

		header {
			width: 100%;
			align-items: center;

			h1 {
				font-size: 20px;
			}
		}
	}
`;
