import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 25%);
	padding: 100px 100px 40px;
	overflow: auto;

	.NotFound {
		display: flex;
		padding-top: 80px;
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
		margin-top: 36px;
		display: flex;
		flex-direction: column;
		gap: 12px;

		span {
			color: #afafaf;
			text-align: right;

			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		.Content {
			width: 100%;
			flex-direction: row;
			/* background-color: red; */
			align-items: center;
			justify-content: space-between;
			display: flex;
		}
		article {
			display: flex;
			align-items: center;
			padding: 20px;

			background-color: #18181b;
			border-radius: 5px;

			span {
				width: 150px;
				text-align: left;
				flex-shrink: 0;
				overflow: hidden;
				white-space: nowrap;
				text-align: center;
				text-overflow: ellipsis;
			}

			.Wrapper {
				display: flex;
				align-items: center;
				gap: 15px;

				& > span {
					flex-shrink: 0;
					overflow: hidden;
					white-space: nowrap;
					text-align: start;
					text-overflow: ellipsis;
					width: 150px;
				}
			}
		}
	}

	@media screen and (max-width: 1024px) {
		width: 100%;
		padding: 20px;

		header {
			width: 100%;
			align-items: center;

			h1 {
				font-size: 20px;
			}
		}

		section {
			article {
				align-items: start;
				gap: 8px;
				> span {
					background-color: red;
					text-align: start;
				}
				flex-direction: column;
				.Content {
					/* align-items: flex-start; */
					flex-direction: row;
					gap: 8px;

					span {
						width: auto;
						text-align: start;
						flex-shrink: 0;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}

					.Wrapper {
						span {
							width: 150px;
						}
					}
				}
			}
		}
	}
`;
