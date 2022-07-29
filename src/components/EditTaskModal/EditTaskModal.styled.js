import styled from "styled-components";
import "../../styles/index.css";
import MQ from "../../styles/MQ.js";

export const StyledEditTaskModal = styled.div`
	box-sizing: border-box;
	width: 320px;
	height: 100%;
	background-color: rgb(240, 240, 240, 0.8);
	box-shadow: 1px 3px 8px var(--lightGrey);
	position: absolute;
	left: ${(props) => props.currentZero};
	display: ${(props) => (props.isEditTask === true ? "grid" : "none")};
	border-style: solid;
	border-width: 1px;
	border-color: var(--lightGrey);
	grid-template-columns: 30% 60%;
	justify-content: center;
	align-content: start;
	label {
		height: 20px;
		margin-top: 10px;
	}
	input {
		height: 20px;
		margin-top: 10px;
		border-radius: 5px;
	}
	svg {
		height: 30px;
		position: absolute;
		right: -40px;
	}
	.DeleteBtn {
		bottom: 35px;
	}
	.ComfirmBtn {
		bottom: 5px;
	}
	.editTaskTitle {
		width: 100%;
		grid-column: 1/3;
		text-align: center;
		color: var(--purple);
		font-weight: bold;
		padding: 4px;
		margin-top: 10px;
	}
`;
