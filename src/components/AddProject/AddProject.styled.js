import styled from "styled-components";
import "../../styles/index.css";
import MQ from "../../styles/MQ.js";

export const StyledAddProject = styled.section`
	width: 100%;
	margin: auto;
	background-color: #ffffff;
	grid-row: 1 / -1;
	align-self: center;
	z-index: 99;
	text-align: center;

	${MQ} {
		grid-row: 3/4;
		margin: auto;
		position: relative;
		z-index: 99;
	}
`;

export const StyledAddProjectModal = styled.div`
	color: black;
	width: ${(props) => props.size.width};
	background-color: white;
	box-shadow: 1px 3px 8px #cccccc;
	position: absolute;
	display: ${(props) => (props.isAddProject === true ? "grid" : "none")};
	border: 1px solid #cccccc;
	border-radius: 5px;
	padding: 15px;
	grid-template-columns: 35% 65%;
	font-size: var(--TextM);
	${MQ} {
		box-sizing: border-box;
		width: 100%;
	}
	label {
		padding: 5px 10px 1px 10px;
		margin: 0px 0px 5px 0px;
		text-align: left;
		${MQ} {
			font-size: var(--TextS);
		}
	}
	select {
		border: 1px solid var(--lightGrey);
		width: 160px;
		padding: 5px 10px 1px 5px;
		border-radius: 10px;
		margin: 0px 0px 5px 0px;
		&:focus {
			outline-style: none;
		}
	}

	input {
		width: 160px;
		padding: 5px 10px 1px 10px;
		border-radius: 0px;
		margin: 0px 0px 5px 0px;
	}
	button {
		place-self: flex-start;
	}
	.errorMessage {
		grid-column: 1/-1;
		color: blueviolet;
		font-size: var(--TextS);
	}
	.closeBtn {
		height: 20px;
		position: absolute;
		top: 15px;
		right: 15px;
	}
`;
