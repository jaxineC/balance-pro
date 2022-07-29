import styled from "styled-components";
import "../../styles/index.css";

const overlayColor = function(item) {
	switch (item.cat) {
		case "work":
			return "5px solid var(--work)";
		case "life":
			return "5px solid var(--life)";
		default:
			return "5px solid var(--work)";
	}
};

export const StyledTask = styled.li`
	height: 22px;
	background-color: var(--lightPurple);
	border: 1px solid var(--lightGrey);
	border-radius: 5px;
	margin: 2px 0px;
	color: var(--black);
	position: absolute;
	background-color: ${(props) =>
		props.isActive === true ? "var(--lightPurple)" : "var(--white)"};
	border-bottom: ${(props) =>
		props.cat === "overlay" ? overlayColor(props.item) : "auto"};
	-webkit-user-select: none;
	&:hover {
		border-color: var(--purple);
		cursor: grab;
	}
	&:active {
		cursor: grabbing;
	}
	&:focus {
		outline: 1.5px solid var(--purple);
		box-shadow: var(--purple);
	}
	.taskNote {
		color: var(--midGrey);
		position: absolute;
		top: 24px;
		left: 0px;
		display: none;
	}
	.editBtn {
		display: none;
		height: 26px;
		position: absolute;
		right: 22px;
		top: -2px;
		padding: 0px;
		margin: 0px;
	}
`;
