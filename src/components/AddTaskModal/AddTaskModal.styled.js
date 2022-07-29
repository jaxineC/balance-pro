import styled from "styled-components";
import "../../styles/index.css";

export const StyledAddTaskModal = styled.div`
	display: ${(props) => (props.isAddTask ? "block" : "none")};
	border-style: none;
	border-radius: 5px;
	background-color: buleviolet;
	object-fit: scaleDown;
	button {
		background-color: transparent;
		border-top: none;
		border-left: none;
		border-right: none;
		height: 20px;
		position: absolute;
		padding: 0px;
		margin: 0px;
	}
	input {
		width: 140px;
		padding: 0px;
		border: 1px;
		border-style: solid;
		border-color: blueviolet;
	}
	svg {
		height: 22px;
		position: absolute;
		padding: 0px;
		margin: 0px;
	}
`;
