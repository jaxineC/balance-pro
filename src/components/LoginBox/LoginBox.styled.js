import styled from "styled-components";
import "../../styles/index.css";
import MQ from "../../styles/MQ.js";

export const Login = styled.div`
	display: grid;
	grid-template-columns: 30% 70%;
	margin: auto;
	padding: 10px;
	background-color: rgb(255, 255, 255);
	font-size: var(--TextM);
	z-index: 99;
	label {
		margin: 10px 5px;
		padding: 5px 10px 1px;
	}
	input {
		border-width: 0px 0px 1px 0px;
		border-style: solid;
		border-width: 0 0 1px;
		margin: 10px;
		letter-spacing: 1px;
		&:focus {
			outline: 1.5px solid blueviolet;
			box-shadow: blueviolet;
			border-radius: 5px;
		}
	}
	.passwordInput {
		&::placeholder {
			letter-spacing: 1px;
		}
		letter-spacing: 6px;
	}

	.Login__ErrorMessage {
		color: blueviolet;
		grid-column: 1/3;
		padding: 5px 0px 1px 10px;
		margin: 0px 5px;
		text-align: center;
		font-size: var(--TextS);
	}
	.Login__Method {
		grid-column: 2/3;
		display: flex;
		padding: 5px 0px 1px 10px;
		text-align: center;
		place-self: flex-start;
		.Login__Method__icon {
			height: 16;
			height: 18px;
			padding: 0px 5px;
			place-self: flex-start;
			background-color: white;
			border-radius: 7px;
			padding: 1px 5px;
			cursor: pointer;
		}
	}

	${MQ} {
		margin: auto;
		background: none;
		z-index: 99;
		padding: 10px;
	}
`;

export const WelcomeBack = styled(Login)`
	display: flex;
	width: 100%;
	flex-direction: column;
	font-size: var(--TextXXL);
	div {
		padding: 5px 0px 1px 10px;
		margin: 0px 5px;
	}
	${MQ} {
		font-size: var(--TextXL);
		width: 80%;
		justify-self: start;
		position: relative;
		right: 30px;
	}
`;
