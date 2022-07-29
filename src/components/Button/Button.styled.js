import styled from "styled-components";
import "../../styles/index.css";
import MQ from "../../styles/MQ.js";

export const Button = styled.button`
	height: 40px;
	width: 225px;
	border: ${(props) =>
		props.attr === "primary" ? "1px solid #cccccc" : "1px solid blueviolet"};
	background-color: ${(props) =>
		props.attr === "primary" ? "blueviolet" : "transparent"};
	color: ${(props) => (props.attr === "primary" ? "#ffffff" : "blueviolet")};

	border-radius: 10px;
	cursor: pointer;
`;

export const HashtagButton = styled(Button)`
	height: 18px;
	width: 6ch;
	border: none;
	color: var(--lime);
`;

export const GoButton = styled(Button)`
	display: ${(props) => (props.userID ? "block" : "none")};
	height: 90px;
	width: 140px;
	border-radius: 50px 0px 0px 50px;
	font-size: var(--TextXXL);
	position: fixed;
	right: 0px;
	top: calc(77.5vh + 45px);
	&:hover {
		outline-style: none;
		box-shadow: rgb(204 204 204) 1px 5px 10px;
	}
	${MQ} {
		top: calc(77.5vh - 30px);
		font-size: var(--TextL);
		height: 60px;
		width: 90px;
	}
`;

export const ModalButton = styled(Button)`
	height: 30px;
	border-radius: 15px;
	margin: 10px 0px;
	text-align: center;
	place-self: center;
`;

export const LoginButton = styled(Button)`
	width: 180px;
	margin-left: 7px;
	height: 30px;
	border-radius: 15px;
`;

export const AddProjectBtn = styled(Button)`
	font-size: var(--TextL);
	color: blueviolet;
	border: none;
	border-radius: 0px;
	padding: 0px;
	width: 100%;
	margin: auto;
	background-color: #ffffff;
	grid-row: 1 / -1;
	align-self: center;
	z-index: 99;
	text-align: center;

	${MQ} {
		font-size: 16px;
		border: 1px solid blueviolet;
		border-radius: 25px;
		margin: auto;
		grid-row: 3 / 4;
		z-index: 99;
		padding: 10px;
	}
`;

export const StyledDeleteBtn = styled.button`
	svg {
		display: ${(props) => (props.isHover ? "inline" : "none")};
		height: 26px;
		position: absolute;
		right: 2px;
		top: -2px;
		padding: 0px;
		margin: 0px;
	}
`;

export const StyledStretchBtn = styled.button`
	height: 26px;
	width: 15px;
	background-color: transparent;
	border: 0px none white;
	display: none;
	position: absolute;
	top: -3px;
	left: ${(props) => (props.date === "start" ? "-12px" : "auto")};
	right: ${(props) => (props.date === "end" ? "-12px" : "auto")};
	svg {
		display: ${(props) => (props.isHover ? "block" : "none")};
		height: 26px;
		position: ${(props) =>
			props.attr === "DeleteBtn" ? "absolute" : "relative"};
		left: ${(props) => (props.date === "start" ? "-12px" : "-10px")};
		z-index: 999;
		top: -2px;
		padding: 0px;
		margin: 0px;
	}
`;
